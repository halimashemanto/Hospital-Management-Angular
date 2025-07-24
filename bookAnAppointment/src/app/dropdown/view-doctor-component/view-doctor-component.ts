import { ChangeDetectorRef, Component } from '@angular/core';
import { Doctor } from '../model/doctorModel';
import { Department } from '../model/departmentModel';
import { DoctorService } from '../doctor-service';
import { DepartmentService } from '../department-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor-component',
  standalone: false,
  templateUrl: './view-doctor-component.html',
  styleUrl: './view-doctor-component.css'
})
export class ViewDoctorComponent {

  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];
  departments: Department[] = [];
  selectedDepartment: string = '';



  constructor(
    private doctorService: DoctorService,
    private departmentService: DepartmentService,
    private router: Router,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadDoctors();
  }

  loadDepartments() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
      this.cdr.markForCheck();
    });
  }

  loadDoctors() {
    this.doctorService.getAllDoctorName().subscribe(data => {
      this.doctors = data;
      this.filteredDoctors = data;
      this.cdr.markForCheck();
    });
  }

  filterByDepartment() {
    if (this.selectedDepartment) {
      this.filteredDoctors = this.doctors.filter(
        doctor => doctor.departmentId === this.selectedDepartment
        
      );
    } else {
      this.filteredDoctors = this.doctors;
    }
  }

  deleteDoctor(id: string) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctorName(id).subscribe(() => {
        alert('Doctor deleted successfully!');
        this.loadDoctors();
      });
    }
  }

  editDoctor(id: string) {
    this.router.navigate(['/edit-doctor', id]);
  }


}
