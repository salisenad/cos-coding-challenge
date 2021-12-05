import {CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    const currentUser = this.authService.currentUserValue;
    if(currentUser) {
      return true
    }
    this.router.navigate(['/login'])
    return false;
  }
}
