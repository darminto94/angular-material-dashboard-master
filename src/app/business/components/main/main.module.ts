import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PostsComponent } from '../posts/posts.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AreaComponent } from '../dashboard/area/area.component';
import { CardComponent } from '../dashboard/card/card.component';
import { PieComponent } from '../dashboard/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppMaterialModule } from 'src/app/library/config/app-material.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]
})
export class MainModule { }
