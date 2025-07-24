import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './model/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = "http://localhost:3000/medicine";

  constructor(private http: HttpClient) {}

  getAllMedicine(): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(this.baseUrl);
    }
  
    getMedicineById(id: string): Observable<Medicine> {
      return this.http.get<Medicine>(`${this.baseUrl}/${id}`);
    }
  
    createMedicine(medi: Medicine): Observable<Medicine> {
      return this.http.post<Medicine>(this.baseUrl, medi);
    }
  
    updateMedicine(medi: Medicine): Observable<Medicine> {
      return this.http.put<Medicine>(`${this.baseUrl}/${medi.id}`, medi);
    }
  
    deleteMedicine(id: string): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
  
     searchMedicine(name: string): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(`${this.baseUrl}?testName_like=^${name}`);
    }
  
}
