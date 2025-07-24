import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine-service';
import { Router } from '@angular/router';
import { Manufacturer } from '../../manufacture/model/manufacture.model';
import { ManufectureService } from '../../manufacture/manufecture-service';
import { Medicine } from '../model/medicine';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-medicine',
  standalone: false,
  templateUrl: './add-medicine.html',
  styleUrl: './add-medicine.css'
})
export class AddMedicine implements OnInit {
 
  medi: Medicine[] = [];
  mediForm!: FormGroup;
  editMode = false;

  constructor(private medicineService: MedicineService,
     private fb: FormBuilder,
    private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadMedicine();

    this.mediForm = this.fb.group({
      id: [], // let JSON Server auto-generate or handle manually
      medicineName: ['', Validators.required],
      applyWay:['']
    });
  }

  loadMedicine(): void {
    this.medicineService.getAllMedicine().subscribe(data => {
      this.medi = data;
      this.cdr.markForCheck();
    });
  }

 onSubmit(): void {
  const medi: Medicine = this.mediForm.value;

  // Assign UUID manually if it's a new test
  if (!this.editMode) {
    medi.id = window.crypto.randomUUID(); // ✅ UUID as string
  }

  if (this.editMode) {
    this.medicineService.updateMedicine(medi).subscribe(() => {
      this.loadMedicine();
      this.mediForm.reset();
      this.editMode = false;
    });
  } else {
    this.medicineService.createMedicine(medi).subscribe(() => {
      this.loadMedicine();
      this.mediForm.reset();
    });
  }
}

  onEdit(medi: Medicine): void {
    this.mediForm.patchValue(medi);
    this.editMode = true;
  }

  onDelete(id: string): void {
  if (confirm('Are you sure to delete this test?')) {
    this.medicineService.deleteMedicine(id).subscribe(() => this.loadMedicine());
  }
}

}
