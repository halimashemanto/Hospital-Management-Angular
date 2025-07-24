import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Patientdocservice } from '../patientdocservice';

@Component({
  selector: 'app-view-patient',
  standalone: false,
  templateUrl: './view-patient.html',
  styleUrl: './view-patient.css'
})
export class ViewPatient implements OnInit {

  patients :any;

constructor(
  private patientService : Patientdocservice,
  private router: Router,
  private cdr: ChangeDetectorRef){}

ngOnInit(): void {
    this.loadAllPatient();
  }

loadAllPatient(){

  this.patients = this.patientService.getAllPatient();
}

deletePatient(id:string):void{
  this.patientService.deletePatient(id).subscribe({

    next:(res)=>{
      this.loadAllPatient();
      this.cdr.reattach();

    },
    error:(error)=>{
console.log(error);

    }

  });

}

 getPatientById(id: string):void{
    this.patientService.getPatientById(id).subscribe({
      next : (res) =>{
  
        this.router.navigate(['/up',id]);
      },

      error: (err) =>{

        console.log(err);
      }

    });

  }




}
