import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department-service';
import { Department } from '../model/departmentModel';



@Component({
  selector: 'app-department-name',
  standalone: false,
  templateUrl: './department-name.html',
  styleUrl: './department-name.css'
})
export class DepartmentName implements OnInit {


  departments: Department[] = [];
  departmentForm!: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadDepartments();

    this.departmentForm = this.fb.group({
      id: [null], // Used for edit
      name: ['', Validators.required]
    });
  }

  loadDepartments() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
      this.cdr.markForCheck();
    });
  }

  onSubmit() {
    
    if (this.departmentForm.valid) {
      const department: Department = this.departmentForm.value;

      if (this.isEditMode && department.id) {
        // UPDATE
        this.departmentService.updateDepartment(department).subscribe(() => {
          this.loadDepartments();
          this.cancelEdit();
        });
      } else {
        // CREATE
        const newDepartment: Department = { name: department.name };
        this.departmentService.addDepartment(newDepartment).subscribe(() => {
          this.loadDepartments();
          this.departmentForm.reset();
        });
      }
    }
  }

  editDepartment(dep: Department) {
    this.isEditMode = true;
    this.departmentForm.patchValue(dep);
  }

  deleteDepartment(id: string) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        this.loadDepartments();
      });
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.departmentForm.reset();
  }

}