import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReceptionistModel } from './model/reciptionistModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReciptionistService {
  private apiUrl = "http://localhost:3000/reciptionistDocModel";

  constructor(private http: HttpClient) { }

  saveReciptionistName(reciptionist: ReceptionistModel): Observable<any> {

    return this.http.post(this.apiUrl, reciptionist);

  }

  deleteReciptionist(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + id);
  }


  getReciptionist(): Observable<ReceptionistModel> {
    return this.http.get<ReceptionistModel>(this.apiUrl);
  }

  updateReciptionist(profile: ReceptionistModel): Observable<ReceptionistModel> {
    return this.http.put<ReceptionistModel>(this.apiUrl, profile);
  }


}
