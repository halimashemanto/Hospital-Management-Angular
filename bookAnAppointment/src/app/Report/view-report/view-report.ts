import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReportService } from '../report-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-report',
  standalone: false,
  templateUrl: './view-report.html',
  styleUrl: './view-report.css'
})
export class ViewReport implements OnInit {

  re: any;

  constructor(
    private reportService: ReportService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllReport();
  }

  loadAllReport() {

    this.re = this.reportService.getAllReport();
  }

  deleteReport(id: string): void {
    this.reportService.deleteReport(id).subscribe({

      next: (res) => {
        this.loadAllReport();
        this.cdr.reattach();

      },
      error: (error) => {
        console.log(error);

      }

    });

  }
  getReportById(id: string): void {
    this.reportService.getReportById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/uppreport', id]);
      },

      error: (err) => {

        console.log(err);
      }

    });

  }




}