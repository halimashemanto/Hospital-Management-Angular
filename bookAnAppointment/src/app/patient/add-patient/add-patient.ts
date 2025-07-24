import { Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { Patientdocservice } from '../patientdocservice';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  standalone: false,
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.css'
})
export class AddPatient implements OnInit {


  pGroup !: FormGroup;

  constructor(private patientService: Patientdocservice,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.pGroup = this.formBuilder.group({

      date:[''],
      name: [''],
      age: [''],
      gender: [''],
      contact: [''],
      address: [''],
      medicalHistory: [''],
      reason: [''],
      status: [''],
      department: [''],
      doctorName: [''],
     

    });

  }

   addPatient(): void {
    const n = { ...this.pGroup.value };
    this.patientService.savePatient(n).subscribe({
      next: (res) => {
        this.pGroup.reset();
        this.router.navigate(['/viewp']);

      },
      error: (error) => {

        console.log(error);
      }

    });
  }
  
 
}