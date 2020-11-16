import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './business/components/login/login.component';
import { AppMaterialModule } from './library/config/app-material.module';
import { MainModule } from './business/components/main/main.module';
import { NotFoundComponent } from './business/components/not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppInterceptor} from "./library/config/app-interceptor.module";
import {ConfirmationService, MessageService} from "primeng/api";
import {MessagesModule} from "primeng/messages";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import { RoleManagementComponent } from './business/components/role-management/role-management.component';
import {CardModule} from "primeng/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import { RoleMenuSaveComponent } from './business/components/role-management/role-menu-save/role-menu-save.component';
import {ToastModule} from "primeng/toast";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {ListboxModule} from "primeng/listbox";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RoleManagementComponent,
    RoleMenuSaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MainModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagesModule,
    CardModule,
    ConfirmDialogModule,
    TableModule,
    PaginatorModule,
    ToastModule,
    AutoCompleteModule,
    ToolbarModule,
    DialogModule,
    ListboxModule,
    InputSwitchModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
}
