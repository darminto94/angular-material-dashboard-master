import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MessageUtil} from "../../library/util/message-util.service";
import {AuthModel} from "../model/auth.model";
import {environment} from "../../../environments/environment.prod";
import {ConfirmationService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private messageUtil: MessageUtil,
    private router: Router,
    public confirmation: ConfirmationService
  ) {}

  signIn(request: AuthModel) {
    this.http.post<any>(environment.apiUrl + 'auth/sign-in', request, {observe: 'response'})
      .subscribe(response => {
        if (response.ok) {
          sessionStorage.setItem('currentUser', JSON.stringify(response.body));
          sessionStorage.setItem('authToken', response.headers.get('x-auth-token'));
          this.router.navigate(['home']);
        }
      }, error => {
        this.messageUtil.message(error, 'warning', false);
      });
  }

  signOut() {
    console.log("SIGN-OUT 1")
    this.http.post<any>(environment.apiUrl + 'auth/sign-out', {observe: 'response'})
      .subscribe(response => {
        this.clearSession();
        console.log("SIGN-OUT 2")
      }, error => {
        this.messageUtil.message(error, 'warning', false);
      });
    /*this.confirmation.confirm({
      message: 'Are you sure want to logout?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'logout',
      accept: () => {
        console.log("SIGN-OUT 2")
        this.http.post<any>(environment.apiUrl + 'auth/sign-out', {observe: 'response'})
          .subscribe(response => {
            this.clearSession();
            this.router.navigate(['login']);
          }, error => {
            this.messageUtil.message(error, 'warning', false);
          });
      }
    });*/
  }

  protected clearSession() {
    if (localStorage.getItem('currentUser') && localStorage.getItem('authToken')) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('authToken');
    } else if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('authToken')) {
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('authToken');
    }
    this.router.navigate(['login']);
  }
}
