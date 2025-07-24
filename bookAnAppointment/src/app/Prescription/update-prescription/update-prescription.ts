import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Prescription } from '../model/prescriptionModel';
import { PrescriptionService } from '../prescription-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-prescription',
  standalone: false,
  templateUrl: './update-prescription.html',
  styleUrl: './update-prescription.css'
})
export class UpdatePrescription implements OnInit {

  id: string = '';
  prescription: Prescription = new Prescription();

  constructor(
    private prescriptionService: PrescriptionService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadPrescriptionById();
    console.log(this.prescription);

  }



  loadPrescriptionById() {

    this.prescriptionService.getPrescriptionById(this.id).subscribe({
      next: (res) => {
        this.prescription = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updatePrescription(): void {
    this.prescriptionService.updatePrescription(this.id, this.prescription).subscribe({

      next: () => {
        this.router.navigate(['/viewprescription'])

      },

      error: err => {
        console.error(err);
      }
    });
  }


}