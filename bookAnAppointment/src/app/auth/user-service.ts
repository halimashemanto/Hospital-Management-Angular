import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth-service';
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/userModel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient,
    private authService: AuthService ) { }

  getUserProfile(): Observable<UserModel| null> {
    return of(this.authService.getUserProfileFromStorage());
  }


    updateUserProfile(user: UserModel): Observable<UserModel> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<UserModel>(`${this.baseUrl}/${user.id}`, user);
  }
  
}