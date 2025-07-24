import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth-service';
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/userModel.model';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

 private baseUrl = 'http://localhost:3000/userModel';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getAdminProfile(): Observable<UserModel | null> {

    return of(this.authService.getUserProfileFromStorage());

  }

  updateAdminProfile(user: UserModel): Observable<UserModel> {

    localStorage.setItem('adminProfile', JSON.stringify(user));
    return this.http.put<UserModel>(`${this.baseUrl}/${user.id}`, user);

  }
}