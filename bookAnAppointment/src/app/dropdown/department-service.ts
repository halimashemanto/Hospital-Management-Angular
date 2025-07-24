import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './model/departmentModel';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  
  private apiUrl = 'http://localhost:3000/departments';

  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  addDepartment(dep: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, dep);
  }

  updateDepartment(dep: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${dep.id}`, dep);
  }

  deleteDepartment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  
}