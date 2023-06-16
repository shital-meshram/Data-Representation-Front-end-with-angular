import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../login/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private login : AuthServiceService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.login.getAuthStatus();
    console.log("isAuthenticated : "+isAuthenticated);
    if (!isAuthenticated) {
        alert("please login first");
        this.router.navigate(['/login']);
    }
    return isAuthenticated;
}
  
}
