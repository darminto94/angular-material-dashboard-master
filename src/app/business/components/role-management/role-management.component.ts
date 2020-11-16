import { Component, OnInit } from '@angular/core';
import {RoleMenuModel} from "../../model/role-menu.model";
import {MessageUtil} from "../../../library/util/message-util.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {ConfirmationService, MessageService} from "primeng/api";
import {RoleModel} from "../../model/role.model";
import {MenuChildModel} from "../../model/menu-child.model";

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  labelDialog: string;
  roleMenuDialog: boolean;

  roleMenus: RoleMenuModel[];
  roleMenu: RoleMenuModel;
  selectedRoleMenus: RoleMenuModel[];

  roles: RoleModel[];
  selectedRole: RoleModel;

  menus: MenuChildModel[];
  selectedMenus: MenuChildModel[];

  submitted: boolean;
  dashboard: boolean = true;

  constructor(
    public http: HttpClient,
    public messageUtil: MessageUtil,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    let params = new HttpParams().append("isActive", String("true"));
    this.http.get<any>(environment.apiUrl + 'role-menu/get-all-role-menu', {params}).subscribe(response => {
      this.roleMenus = response.content;
    },error => {
      this.messageUtil.message(error, 'warning', false);
    });
  }

  actionAdd(){
    this.labelDialog = 'Add Role Menu';
    this.roleMenu = {};
    this.submitted = false;
    this.roleMenuDialog = true;
    this.findAllRole();
    this.findAllMenuChild();
  }

  editRoleMenu(roleMenu: RoleMenuModel) {
    console.log(roleMenu);
    this.labelDialog = 'Edit Role Menu';
    this.roleMenu = {...roleMenu};
    this.roleMenuDialog = true;
  }

  deleteRoleMenu(roleMenu: RoleMenuModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete Role ' + roleMenu.role.roleName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.roleMenus = this.roleMenus.filter(val => val.id !== roleMenu.id);
        this.roleMenu = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.roleMenuDialog = false;
    this.submitted = false;
    this.selectedRole = {};
    this.selectedMenus = [];
  }

  saveProduct() {
    this.submitted = true;
    console.log("SELECTED ROLE")
    console.log(this.selectedRole);
    console.log("SELECTED MENU");
    console.log(this.selectedMenus);
    if(this.selectedRole === undefined){
      this.messageService.add({severity:'warn', summary: 'Warning', detail: 'Please select role !!', life: 3000});
    } else if(this.selectedMenus === undefined){
      this.messageService.add({severity:'error', summary: 'Error', detail: 'No menu selected for this role !!', life: 3000});
    } else {
      const param = {
        role: this.selectedRole,
        menuChildes: this.selectedMenus
      }

      this.confirmationService.confirm({
        message: 'Are you sure want to save this data?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.http.post<any>(environment.apiUrl + 'role-menu/save', param, {observe: 'response'})
            .subscribe(response => {
            if(response.ok){
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Data has been saved successfully', life: 3000});
              this.roleMenu = {};
              this.roleMenuDialog = false;
              this.getList();
            }
          },error => {
            this.messageUtil.message(error, 'warning', false);
          })
        }
      });
    }
  }

  findAllRole(){
    let params = new HttpParams().append("isActive", String("true"));
    this.http.get<any>(environment.apiUrl + 'role/get-all', {params}).subscribe(response => {
      this.roles = response.content;
    },error => {
      this.messageUtil.message(error, 'warning', false);
    });
  }

  findAllMenuChild(){
    let params = new HttpParams().append("isActive", String("true"));
    this.http.get<any>(environment.apiUrl + 'role-menu/get-all-menu-child', {params}).subscribe(response => {
      this.menus = response.content;
    },error => {
      this.messageUtil.message(error, 'warning', false);
    });
  }
}
