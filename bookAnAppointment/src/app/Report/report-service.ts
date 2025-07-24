import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportModel } from './model/reportModel';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl : string = "http://localhost:3000/reportModel";

  constructor(private http: HttpClient) { }

   getAllReport():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  saveReport(re:ReportModel):Observable<any>{
    return this.http.post(this.baseUrl,re);
  }

  deleteReport(id:string):Observable<any>{
    return this.http.delete(this.baseUrl +'/'+id);
  }

  getReportById(id:string):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
  updatePrescription(id: string, prescription: ReportModel): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, prescription);
  }
}