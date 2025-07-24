import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrescriptionService } from '../prescription-service';
import { Router } from '@angular/router';
import { Test } from '../../test/model/testModel';
import { Doctor } from '../../dropdown/model/doctorModel';
import { Prescription } from '../model/prescriptionModel';
import { PatientDocModel } from '../../patient/model/patientDocModel';
import { Patientdocservice } from '../../patient/patientdocservice';
import { TestService } from '../../test/test-service';
import { DoctorService } from '../../dropdown/doctor-service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Medicine } from '../../Pharmacy/model/medicine';
import { MedicineService } from '../../Pharmacy/medicine-service';

@Component({
  selector: 'app-add-prescription',
  standalone: false,
  templateUrl: './add-prescription.html',
  styleUrl: './add-prescription.css'
})
export class AddPrescription implements OnInit {


  testSuggestions: Test[][] = [];
  medicineSuggestions: Medicine[][] = [];




  prescription: Prescription = {
    patientId: {} as PatientDocModel,
    doctorId: {} as Doctor,
    date: new Date(),
    tests: [],
    medicines: [],

    note: '',
    advice: '',
    height: '',
    weight: '',
    bp: ''
   

  };


  searchPhone = '';
  doctors: Doctor[] = [];
  patientStatus = '';

  constructor(
    private prescriptionService: PrescriptionService,
    private doctorService: DoctorService,
    private patientService: Patientdocservice,
    private testService: TestService,
    private mediService: MedicineService,
    private router: Router
  ) { }

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
        this.prescription.patientId = data[0];
        this.patientStatus = 'Existing patient loaded.';
      } else {
        this.prescription.patientId = {
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

  // test

  addTest() {
    this.prescription.tests.push({ testName: '', testPrice: 0 });
  }


  removeTest(index: number) {
    this.prescription.tests.splice(index, 1);

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
    this.prescription.tests[index].testName = test.testName;
    this.testSuggestions[index] = [];

  }

  // medicine
 
  addMedecine() {
    this.prescription.medicines.push({ medicineName: '', applyWay: '' });
  }

  removeMedecine(index: number) {
    this.prescription.medicines.splice(index, 1);
   
  }


  onMedecineNameInput(value: string, index: number): void {
  if (value.length >= 1) {
    this.mediService.searchMedicine(value).subscribe(data => {
      this.medicineSuggestions[index] = data;
    });
  } else {
    this.medicineSuggestions[index] = [];
  }
}

onSelectMedecine(medi: Medicine, index: number): void {
  this.prescription.medicines[index].medicineName = medi.medicineName;
  this.prescription.medicines[index].applyWay = medi.applyWay;
  this.medicineSuggestions[index] = [];
  
}



  submitPrescription() {
    this.prescriptionService.savePrescription(this.prescription).subscribe(() => {
      alert('Invoice submitted successfully!');
      this.printPrescription(); // Call after save
      // Reset if needed
    });
  }


  // print pdf



  printPrescription() {
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
        pdf.save(`${this.prescription.patientId.name || 'prescription'}.pdf`);

        // Hide again after saving
        element.style.display = 'none';
      });
    }, 300); // Give it a short delay to render
  }



}



