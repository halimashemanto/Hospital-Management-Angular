import { CanActivateFn } from '@angular/router';

import { CanActivate, Router, UrlTree } from '@angular/router';


import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth-service';


@Injectable({
  providedIn: 'root'
})
export class doctorGurd implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


   canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.isAuthenticated() && this.authService.isDoctor()) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }

  
}
