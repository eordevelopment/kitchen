import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/services/auth-guard';
import { HomeComponent } from 'app/modules/welcome/components/home/home.component';
import { HomePublicComponent } from 'app/modules/welcome/components/home-public/home-public.component';
import { LoginComponent } from 'app/modules/welcome/components/login/login.component';
import { RegisterComponent } from 'app/modules/welcome/components/register/register.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'welcome',  component: HomePublicComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class WelcomeRoutingModule {}
