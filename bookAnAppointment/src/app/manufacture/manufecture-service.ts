import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manufacturer } from './model/manufacture.model';

@Injectable({
  providedIn: 'root'
})
export class ManufectureService  {

  private apiUrl = 'http://localhost:3000/manufacture';

  constructor(private http: HttpClient) {}

  getManufacturers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  getManufacturerById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createManufacturer(manufacturer: Manufacturer): Observable<any> {
    return this.http.post(this.apiUrl, manufacturer);
  }

  updateManufacturer(id: number, manufacturer: Manufacturer): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, manufacturer);
  }

  deleteManufacturer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
