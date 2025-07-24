import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-prescription',
  standalone: false,
  templateUrl: './view-prescription.html',
  styleUrl: './view-prescription.css'
})
export class ViewPrescription  implements OnInit {

  prescription: any;

  constructor(
    private prescriptionService: PrescriptionService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllPrescription();
  }

  loadAllPrescription() {

    this.prescription = this.prescriptionService.getAllPrescription();
  }

  deletePrescription(id: string): void {
    this.prescriptionService.deletePrescription(id).subscribe({

      next: (res) => {
        this.loadAllPrescription();
        this.cdr.reattach();

      },
      error: (error) => {
        console.log(error);

      }

    });

  }
  getPrescriptionById(id: string): void {
    this.prescriptionService.getPrescriptionById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/upprescription', id]);
      },

      error: (err) => {

        console.log(err);
      }

    });

  }




}