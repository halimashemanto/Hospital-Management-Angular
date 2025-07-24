import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BillService } from '../bill-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../dropdown/model/doctorModel';
import { PatientDocModel } from '../../patient/model/patientDocModel';
import { TestInvoice } from '../model/testInvoice';

@Component({
  selector: 'app-view-bill',
  standalone: false,
  templateUrl: './view-bill.html',
  styleUrl: './view-bill.css'
})
export class ViewBill implements OnInit {


  id!: string;
  bill!: TestInvoice;

  doc: Doctor[] = [];
  patient: PatientDocModel[] = [];


  constructor(
    private billService: BillService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadBill();

  }

  loadBill(): void {
    this.billService.loadBill(this.bill).subscribe({
      next: (res) => {
        this.bill = res;
        console.log(res);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}