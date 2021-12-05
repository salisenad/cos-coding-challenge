import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./_layouts/_login/login.component";
import {AuthGuardPagesComponent} from "./_layouts/_auth-guard-pages/auth-guard-pages.component";
import {AuthGuardRoutes} from "./shared/_routes/auth-guard-routes";
import {NonAuthGuard} from "./shared/guards/non-auth-guard";
import {AuthGuard} from "./shared/guards/auth-guard";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: '',
    component: AuthGuardPagesComponent,
    children: AuthGuardRoutes,
    canActivate: [AuthGuard],
    data: { title: 'Auth Guard Pages' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
