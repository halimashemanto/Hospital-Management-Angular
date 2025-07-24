import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './model/doctorModel';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  private apiUrl = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) {}

  getAllDoctorName(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  addDoctorName(dm: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, dm);
  }

  updateDoctorName(dm: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${dm.id}`, dm);
  }

  deleteDoctorName(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  getDoctorById(id: string): Observable<Doctor> {
  return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
}

getDoctorsByDepartment(departmentId: string): Observable<Doctor[]> {
  return this.http.get<Doctor[]>(`${this.apiUrl}?departmentId=${departmentId}`);
}


  
}