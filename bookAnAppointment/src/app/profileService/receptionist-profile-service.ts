import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/userModel.model';
import { AuthService } from '../service/auth-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistProfileService {

 private baseUrl = 'http://localhost:3000/userModel';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getReceptionistProfile(): Observable<UserModel | null> {

    return of(this.authService.getUserProfileFromStorage());

  }

  updateReceptionistProfile(user: UserModel): Observable<UserModel> {

    localStorage.setItem('recProfile', JSON.stringify(user));
    return this.http.put<UserModel>(`${this.baseUrl}/${user.id}`, user);

  }
}