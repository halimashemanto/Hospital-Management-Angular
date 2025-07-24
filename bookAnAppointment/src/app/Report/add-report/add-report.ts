import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from '../report-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-report',
  standalone: false,
  templateUrl: './add-report.html',
  styleUrl: './add-report.css'
})
export class AddReport implements OnInit {

  reportGroup!: FormGroup;

  constructor(
    private reportService: ReportService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reportGroup = this.formBuilder.group({
      'doctorName': [''],
      'reportResult': [''],
      'description': [''],
      'sampleId': [''],
      'interpretation':[''],
      'patientName':[''],
      'testDate':[''],
      'createDate':[''],
      'deliveryDate':['']
    });

  }
  addReport():void{
    const books = {...this.reportGroup.value};
    this.reportService.saveReport(books).subscribe({
      next:(res)=>{
        this.reportGroup.reset();
        this.router.navigate(['/viewreport']);

      },
      error:(error)=>{

        console.log(error);
      }

    });
  }


}
