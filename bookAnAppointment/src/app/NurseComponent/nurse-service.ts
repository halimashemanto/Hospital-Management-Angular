import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NurseModel } from './modelnurse/nurseModel';
import { Observable, of } from 'rxjs';
import { AuthService } from '../service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

 private apiUrl = "http://localhost:3000/nurseModel";

  constructor(private http: HttpClient,
    private authService: AuthService

  ) { }

  getAllNurse():Observable<any>{
      return this.http.get(this.apiUrl);
    }
  
    saveNurse(nurse:NurseModel):Observable<any>{
      return this.http.post(this.apiUrl,nurse);
    }
  
   
     deleteNurse(id:string):Observable<any>{
       return this.http.delete(this.apiUrl +'/'+id);
     }
   
     getNurseById(id:string):Observable<any>{
       return this.http.get(this.apiUrl+'/'+id);
     }
     updateNurse(id: string, nurse: NurseModel): Observable<any>{
   
       return this.http.put(this.apiUrl+'/'+id, nurse);
     }

       getNurseProfile(): Observable<NurseModel | null> {
    return of(this.authService.getNurseProfileFromStorage());
  }


    updateUserProfile(nurse: NurseModel): Observable<NurseModel> {
    localStorage.setItem('nurseProfile', JSON.stringify(nurse));
    return this.http.put<NurseModel>(`${this.apiUrl}/${nurse.id}`, nurse);
  }
  }
  