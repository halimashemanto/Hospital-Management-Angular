import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../dropdown/model/doctorModel';
import { PatientDocModel } from '../patient/model/patientDocModel';
import { TestInvoice } from './model/testInvoice';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiUrl: string = "http://localhost:3000/testInvoice";

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }
  getAllPatients(): Observable<PatientDocModel[]> {
    return this.http.get<PatientDocModel[]>(this.apiUrl);
  }

  saveBill(bill: TestInvoice): Observable<any> {
    return this.http.post(this.apiUrl, bill);
  }

  // getAllBills(): Observable<any> {
  //   return this.http.get<TotalBillModel>(`${this.apiUrl}/`);
  // }

  createBill(bill: TestInvoice): Observable<any> {
    return this.http.post<TestInvoice>(this.apiUrl, bill);
  }

 loadBill(bill:TestInvoice): Observable<any> {
    return this.http.get(this.apiUrl+'/'+bill);
  }


}
