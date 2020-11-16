import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  exports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    PanelMenuModule
  ]
})
export class AppPrimeNgModule { }