

import { Injectable } from '@angular/core';
import { CanActivate,  Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth-service';


@Injectable({
  providedIn: 'root'
})
export class recAdminGurde implements CanActivate {
  constructor(private authService: AuthService,
     private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isAuthenticated() && (this.authService.isAdmin() || this.authService.isReceptionist())) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}

