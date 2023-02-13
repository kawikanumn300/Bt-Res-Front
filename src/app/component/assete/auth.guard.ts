import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  result: any
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const data = next.data;
    // Check if the data object meets your requirements
    if (!data || data !== this.result ) {
      // Redirect to an unauthorized page or show an error message
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
}
