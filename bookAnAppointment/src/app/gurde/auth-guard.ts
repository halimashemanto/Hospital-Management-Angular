

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private authService: AuthService,
               private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isAuthenticated() && (this.authService.isAdmin() || this.authService.isDoctor())) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
