import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './business/components/dashboard/dashboard.component';
import { LoginComponent } from './business/components/login/login.component';
import { MainComponent } from './business/components/main/main.component';
import { PostsComponent } from './business/components/posts/posts.component';
import { AuthGuard } from './library/config/auth.guard';

const routes: Routes = [
  { 
    path: 'home', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'posts', component: PostsComponent},
    ]
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },

  /*
    REDIRECT
  */
  { 
    path: '', 
    redirectTo: '/login', pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
