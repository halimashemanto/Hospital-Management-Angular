import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from './model/testModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

   private baseUrl = 'http://localhost:3000/testModel';

  constructor(private http: HttpClient) {}

  getAllTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.baseUrl);
  }

  getTestById(id: string): Observable<Test> {
    return this.http.get<Test>(`${this.baseUrl}/${id}`);
  }

  createTest(test: Test): Observable<Test> {
    return this.http.post<Test>(this.baseUrl, test);
  }

  updateTest(test: Test): Observable<Test> {
    return this.http.put<Test>(`${this.baseUrl}/${test.id}`, test);
  }

  deleteTest(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

   searchTests(name: string): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.baseUrl}?testName_like=^${name}`);
  }


}
