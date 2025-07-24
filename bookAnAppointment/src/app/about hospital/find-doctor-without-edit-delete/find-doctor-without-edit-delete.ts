import { ChangeDetectorRef, Component } from '@angular/core';
import { Doctor } from '../../dropdown/model/doctorModel';
import { Department } from '../../dropdown/model/departmentModel';
import { DoctorService } from '../../dropdown/doctor-service';
import { DepartmentService } from '../../dropdown/department-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-doctor-without-edit-delete',
  standalone: false,
  templateUrl: './find-doctor-without-edit-delete.html',
  styleUrl: './find-doctor-without-edit-delete.css'
})
export class FindDoctorWithoutEditDelete {

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
    });
  }

  loadDoctors() {
    this.doctorService.getAllDoctorName().subscribe(data => {
      this.doctors = data;
      this.filteredDoctors = data;
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
