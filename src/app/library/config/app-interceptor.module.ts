import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  private authToken: string;

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('authToken')) {
      this.authToken = localStorage.getItem('authToken');
      console.log(this.authToken);
    }
    if (sessionStorage.getItem('authToken')) {
      this.authToken = sessionStorage.getItem('authToken');
    }
    const authReq = req.clone({
      headers: req.headers
        .set('content-type', 'application/json')
        .set('x-auth-token', 'bank-mandiri ' + this.authToken)
    });
    return next.handle(authReq);
  }
}
