import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './business/components/login/login.component';
import { AppMaterialModule } from './library/config/app-material.module';
import { MainModule } from './business/components/main/main.module';
import { NotFoundComponent } from './business/components/not-found/not-found.component';
import { AppPrimeNgModule } from './library/config/app-prime-ng.module';
// import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppPrimeNgModule,
    MainModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
