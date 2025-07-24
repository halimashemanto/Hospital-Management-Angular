import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../dropdown/model/doctorModel';
import { BillService } from '../bill-service';
import { PatientDocModel } from '../../patient/model/patientDocModel';
import { DoctorService } from '../../dropdown/doctor-service';
import { Patientdocservice } from '../../patient/patientdocservice';
import { TestInvoice } from '../model/testInvoice';
import { TestService } from '../../test/test-service';
import { Test } from '../../test/model/testModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';





@Component({
  selector: 'app-add-bill',
  standalone: false,
  templateUrl: './add-bill.html',
  styleUrl: './add-bill.css'
})
export class AddBill implements OnInit {


  testSuggestions: Test[][] = []; // For each row's dropdown




   invoice: TestInvoice = {
    patientId: {} as PatientDocModel,
    doctorId: {} as Doctor,
    invoiceDate: new Date(),
    tests: [],
    amount: 0,
    discount: 0,
    totalAmount: 0,
    totalDiscount: 0,
    payable: 0,
    received: 0,
    due: 0,
    deliveryDate: new Date(),
    deliveryTime: 0,
    status: false,
    preparedBy: ''
  };

  searchPhone = '';
  doctors: Doctor[] = [];
  patientStatus = '';

  constructor(
    private doctorService: DoctorService,
    private patientService: Patientdocservice,
    private invoiceService: BillService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctorService.getAllDoctorName().subscribe(data => {
      this.doctors = data;
    });
  }

  findPatient() {
    this.patientService.findByContact(this.searchPhone).subscribe(data => {
      if (data.length > 0) {
        this.invoice.patientId = data[0];
        this.patientStatus = 'Existing patient loaded.';
      } else {
        this.invoice.patientId = {
          id: '',
          name: '',
          age: '',
          gender: '',
          contact: this.searchPhone,
          address: '',
          date: '',
          doctorName: '',
          medicalHistory: '',
          reason: '',
          status: '',
          department: ''
        };
        this.patientStatus = 'New patient. Please fill in details.';
      }
    });
  }

  addTest() {
    this.invoice.tests.push({ testName: '', testPrice: 0 });
  }

  removeTest(index: number) {
    this.invoice.tests.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.invoice.amount = this.invoice.tests.reduce((sum, t) => sum + (t.testPrice || 0), 0);
    this.invoice.totalDiscount = this.invoice.discount;
    this.invoice.totalAmount = this.invoice.amount - this.invoice.discount;
    this.invoice.payable = this.invoice.totalAmount;
    this.invoice.due = this.invoice.payable - (this.invoice.received || 0);
    this.invoice.status = this.invoice.due <= 0;
  }

  submitInvoice() {
    this.invoiceService.saveBill(this.invoice).subscribe(() => {
      alert('Invoice submitted successfully!');
      this.printInvoice(); // Call after save
      // Reset if needed
    });
  }

  onTestNameInput(value: string, index: number): void {
  if (value.length >= 1) {
    this.testService.searchTests(value).subscribe(data => {
      this.testSuggestions[index] = data;
    });
  } else {
    this.testSuggestions[index] = [];
  }
}

onSelectTest(test: Test, index: number): void {
  this.invoice.tests[index].testName = test.testName;
  this.invoice.tests[index].testPrice = test.testPrice;
  this.testSuggestions[index] = [];
  this.calculateTotal();
}



printInvoice() {
  const element = document.getElementById('invoiceToPrint');
  if (!element) return;

  // Temporarily show the element
  element.style.display = 'block';

  setTimeout(() => {
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgProps = (pdf as any).getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${this.invoice.patientId.name || 'invoice'}.pdf`);

      // Hide again after saving
      element.style.display = 'none';
    });
  }, 300); // Give it a short delay to render
}


}