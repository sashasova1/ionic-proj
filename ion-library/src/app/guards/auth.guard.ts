import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FireDataGetterService } from '../services/fire-data-getter.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private fireData: FireDataGetterService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.fireData.getUser() !== '';
    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
    return isLoggedIn;
  }
}
