import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../model/departmentModel';
import { DoctorService } from '../doctor-service';
import { DepartmentService } from '../department-service';
import { Doctor } from '../model/doctorModel';

@Component({
  selector: 'app-add-doctor-component',
  standalone: false,
  templateUrl: './add-doctor-component.html',
  styleUrl: './add-doctor-component.css'
})
export class AddDoctorComponent {


   doctorForm!: FormGroup;
  departments: Department[] = [];

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private departmentService: DepartmentService,
    private cdr:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
       name: ['', Validators.required],
      designation: ['', Validators.required],
      degree: ['', Validators.required],
      photo: ['', Validators.required],
      schedule: ['', Validators.required],
      departmentId: ['', Validators.required]
    });

    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
      this.cdr.markForCheck();
    });
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      const newDoctor: Doctor = this.doctorForm.value;
      this.doctorService.addDoctorName(newDoctor).subscribe(() => {
        alert('Doctor added successfully!');
        this.doctorForm.reset();
      });
    }
  }



}
