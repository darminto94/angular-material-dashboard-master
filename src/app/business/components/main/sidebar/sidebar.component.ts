import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {UserDefault} from "../../../model/user-default.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Menus} from "../../../model/response/menus";
import {environment} from "../../../../../environments/environment.prod";
import {Menu} from "../../../model/request/menu";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];
  user = new UserDefault();
  menuItem: Menu[];

  constructor(
    private http: HttpClient
  ) {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    } else if (sessionStorage.getItem('currentUser')) {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    }
  }

  ngOnInit() {
    console.log("USER INFO ::: "+JSON.stringify(this.user));
    let params = new HttpParams().append('roleId', String(this.user.roleId));
    this.http.get<Menus>(environment.apiUrl + 'role-menu/get-by-role-id', {params})
      .subscribe(response => {
        this.menuItem = response.content;
      });
  }
}
