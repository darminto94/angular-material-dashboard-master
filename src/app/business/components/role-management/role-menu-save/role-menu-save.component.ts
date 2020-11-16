import { Component, OnInit } from '@angular/core';
import {RoleModel} from "../../../model/role.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../../environments/environment.prod";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageUtil} from "../../../../library/util/message-util.service";
import {MenuChildModel} from "../../../model/menu-child.model";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-role-menu-save',
  templateUrl: './role-menu-save.component.html',
  styleUrls: ['./role-menu-save.component.scss']
})
export class RoleMenuSaveComponent implements OnInit {

  menus: MenuChildModel[];
  roles: RoleModel[];
  role = new RoleModel();
  menuDetails: MenuChildModel[] = [];
  constructor(
    public http: HttpClient,
    public messageUtil: MessageUtil,
    public confirmation: ConfirmationService,
    public dialogRef: DynamicDialogRef
  ) { }

  ngOnInit(): void {
  }

  findAllRole(){
    let params = new HttpParams().append("isActive", String("true"));
    this.http.get<any>(environment.apiUrl + 'role/get-all', {params}).subscribe(response => {
      this.roles = response.content;
    },error => {
      this.messageUtil.message(error, 'warning', false);
    });
  }

  addData(){
    this.menuDetails.push({
      id: null,
      isActive: null,
      icon: null,
      label: null,
      routerLink: null,
      menuId: null,
      menu:{
        id: null,
        isActive: null,
        menuName: null
      }
    })
  }

  actionSelectMenu(menu: MenuChildModel, i: number){
    this.menuDetails[i] = menu;
  }

  findAllMenuChild(){
    /*let params = new HttpParams()
      .append('page', String(1))
      .append('limit', String(50))
      .append('dir', String('asc'))
      .append('sort', String('clusterName'))
      .append('paramStr', String(event.query))
      .append('isActive', String(true));
    this.http.get<any>(environment.apiUrl + 'menu/get-all-menu-child', {params}).subscribe(response => {
      this.menus = [];
      this.menus = response.content;
    },error => {
      this.messageUtil.message(error, 'warning', false);
    });*/
  }

  softDelete(cluster: MenuChildModel){
    this.confirmation.confirm({
      message: 'Are you sure want to delete this data?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const index: number = this.menuDetails.indexOf(cluster);
        this.menuDetails.splice(index, 1);
      }
    });
  }

  cancel(){
    this.dialogRef.close();
  }

  actionRoleMenu(){}
}
