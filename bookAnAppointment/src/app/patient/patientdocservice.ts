import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { PatientDocModel } from './model/patientDocModel';

@Injectable({
  providedIn: 'root'
})
export class Patientdocservice {
  private baseUrl = "http://localhost:3000/patientDocModel";

  constructor(private http: HttpClient) { }

  getAllPatient(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  savePatient(patient: PatientDocModel): Observable<any> {
    return this.http.post(this.baseUrl, patient);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getPatientById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  updatePatient(id: string, p: PatientDocModel): Observable<any> {

    return this.http.put(this.baseUrl + '/' + id, p);
  }

   findByContact(contact: string): Observable<PatientDocModel[]> {
    return this.http.get<PatientDocModel[]>(`${this.baseUrl}?contact=${contact}`);
  }

}
