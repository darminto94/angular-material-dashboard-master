import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }

  /*private current: any;

  constructor(private http: HttpClient, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('currentUser')) {
      this.current = JSON.parse(localStorage.getItem('currentUser'));
    } else if (sessionStorage.getItem('currentUser')) {
      this.current = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    if (this.current !== undefined ) {
      // ---------------------------------------------------------------------------------------------------------------
      let authorization = this.http.get(environment.apiUrl + 'auth/authority').pipe(
        map(response => {return this.current.id === response['user'].id;}));
      console.log(authorization);
      if(authorization){
        return true;
      } else {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      }
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    }
  }

  static canDeactivate(): boolean {
    return confirm('You have unsaved changes! If you leave, your changes will be lost.');
  }*/

}
