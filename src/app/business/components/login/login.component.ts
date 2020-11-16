import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {AuthModel} from "../../model/auth.model";
import {UserDefault} from "../../model/user-default.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public authModel: AuthModel;
  public user: UserDefault;

  constructor(
    public router: Router,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    } else if (sessionStorage.getItem('currentUser')) {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    }
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form(){
    return this.formGroup.controls;
  }

  signIn() {
    if (this.formGroup.invalid) {
      return;
    }
    this.authModel = {
      "password": this.form.password.value,
      "username": this.form.username.value
    };
    this.authService.signIn(this.authModel);
  }

}
