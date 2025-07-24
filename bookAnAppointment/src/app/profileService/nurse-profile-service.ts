import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth-service';
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/userModel.model';
import { NurseModel } from '../NurseComponent/modelnurse/nurseModel';

@Injectable({
  providedIn: 'root'
})
export class NurseProfileService {


 private baseUrl = 'http://localhost:3000/nurseModel';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getNurseProfile(): Observable<NurseModel | null> {

    return of(this.authService.getNurseProfileFromStorage());

  }

  updateNurseProfile(user: NurseModel): Observable<NurseModel> {

    localStorage.setItem('nurseProfile', JSON.stringify(user));
    return this.http.put<NurseModel>(`${this.baseUrl}/${user.id}`, user);

  }
}