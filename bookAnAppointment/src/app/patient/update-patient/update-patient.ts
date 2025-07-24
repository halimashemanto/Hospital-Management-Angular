import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Patientdocservice } from '../patientdocservice';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css'
})
export class UpdatePatient implements OnInit {

  id: string = '';
  patient: PatientDocModel = new PatientDocModel();

  constructor(
    private patientService: Patientdocservice,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadPatientById();
     console.log(this.patient);

  }

  loadPatientById() {

    this.patientService.getPatientById(this.id).subscribe({
      next: (res) => {
        this.patient = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updatePatient(): void {
    this.patientService.updatePatient(this.id,this.patient).subscribe({

      next: () => {
        this.router.navigate(['/viewp'])

      },


      error: err => {
        console.error(err);
      }
    });
  }


}
