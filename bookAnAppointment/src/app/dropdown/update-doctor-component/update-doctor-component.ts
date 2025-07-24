import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../model/departmentModel';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor-service';
import { DepartmentService } from '../department-service';

import { Doctor } from '../model/doctorModel';

@Component({
  selector: 'app-update-doctor-component',
  standalone: false,
  templateUrl: './update-doctor-component.html',
  styleUrl: './update-doctor-component.css'
})
export class UpdateDoctorComponent implements OnInit{

  doctorForm!: FormGroup;
  departments: Department[] = [];
  doctorId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private depService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];
    this.loadDepartments();
    this.loadDoctor();
    this.initForm();
  }

  initForm() {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      degree: ['', Validators.required],
      photo: ['', Validators.required],
      schedule: ['', Validators.required],
      departmentId: ['', Validators.required]
    });
  }

  loadDepartments() {
    this.depService.getAllDepartment().subscribe(data => {
      this.departments = data;
    });
  }

  loadDoctor() {
    this.doctorService.getDoctorById(this.doctorId).subscribe(doctor => {
      this.doctorForm.patchValue(doctor);
    });
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      const updatedDoctor: Doctor = {
        id: this.doctorId,
        ...this.doctorForm.value
      };

      this.doctorService.updateDoctorName(updatedDoctor).subscribe(() => {
        alert('Doctor updated successfully!');
        this.router.navigate(['/viewdoc']); // or wherever you want
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

}
