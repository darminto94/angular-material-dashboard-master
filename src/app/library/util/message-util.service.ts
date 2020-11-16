import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {ErrorModel} from "../../business/model/error.model";

@Injectable({
  providedIn: 'root'
})
export class MessageUtil {

  errorBody: ErrorModel;

  constructor(
    private messageService: MessageService,
    private router: Router){}

  clearSession() {
    if (localStorage.getItem('currentUser') && localStorage.getItem('authToken')) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('authToken');
    } else if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('authToken')) {
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('authToken');
    }
    this.router.navigate(['sign-in']);
  }

  initMessage() {
    this.messageService.clear();
  }

  message(error, flag: string, statusAdd: boolean) {
    if (!statusAdd) {
      this.initMessage();
    }
    if (error != null) {
      this.errorBody = error;
    }
    if (flag === 'success' && error === null) {
      this.messageService.add({severity: 'success', summary: 'Success: ', detail: 'Success'});
    } else if (flag === 'info' && this.errorBody.error.message != null) {
      this.messageService.add({severity: 'info', summary: 'Info: ', detail: this.errorBody.error.message});
      if (this.errorBody.error.message.match('Full authentication is required to access this resource')) {
        this.clearSession();
      }
    } else if (flag === 'warning' && this.errorBody.error.message != null) {
      this.messageService.add({severity: 'warn', summary: 'Warning: ', detail: this.errorBody.error.message});
      if (this.errorBody.error.message.match('Full authentication is required to access this resource')) {
        this.clearSession();
      }
    } else if (flag === 'error' && this.errorBody.error.message != null) {
      this.messageService.add({severity: 'error', summary: 'Error: ', detail: this.errorBody.error.message});
      if (this.errorBody.error.message.match('Full authentication is required to access this resource')) {
        this.clearSession();
      }
    } else {
      this.messageService.add({severity: 'warn', summary: 'Error: ', detail: 'Error connection refused'});
      if (this.errorBody.error.message.match('Full authentication is required to access this resource')) {
        this.clearSession();
      }
    }
  }
}
