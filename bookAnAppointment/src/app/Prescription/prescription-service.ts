import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from './model/prescriptionModel';
import { Doctor } from '../dropdown/model/doctorModel';
import { PatientDocModel } from '../patient/model/patientDocModel';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  baseUrl : string = "http://localhost:3000/prescriptionModel";

  constructor(private http: HttpClient) { }


   getAllDoctors(): Observable<Doctor[]> {
      return this.http.get<Doctor[]>(this.baseUrl);
    }
    getAllPatients(): Observable<PatientDocModel[]> {
      return this.http.get<PatientDocModel[]>(this.baseUrl);
    }


   getAllPrescription():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  savePrescription(prescription:Prescription):Observable<any>{
    return this.http.post(this.baseUrl,prescription);
  }

  deletePrescription(id:string):Observable<any>{
    return this.http.delete(this.baseUrl +'/'+id);
  }

  getPrescriptionById(id:string):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
  updatePrescription(id: string, prescription: Prescription): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, prescription);
  }
}