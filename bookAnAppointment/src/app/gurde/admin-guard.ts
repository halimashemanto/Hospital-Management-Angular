import { CanActivate,  Router, UrlTree } from '@angular/router';

import {  Inject, Injectable,  PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate{


  constructor(
    private authService: AuthService,
    private router: Router,    
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }



   canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    }
    // Redirect to login page or unauthorized page
    return this.router.createUrlTree(['/login']);
  }

}