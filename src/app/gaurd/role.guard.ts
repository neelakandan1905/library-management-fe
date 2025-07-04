import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.loginService.getUser();
    const requiredRole = next.data['role']; // Getting the required role from the route data

    if (user && user.role === requiredRole) {
      return true; // Allow access
    }
    if (user?.role === 'admin') {
      this.router.navigate(['/admin']); // Redirect to admin page if user is admin
    } else if (user?.role === 'user') {
      this.router.navigate(['/user']); // Redirect to user page if user is not admin
    } else {
      this.router.navigate(['/']); // Redirect to login page if no user is logged in
    }
    return false;
  }
}
