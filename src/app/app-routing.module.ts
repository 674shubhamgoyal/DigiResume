import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { forgotPassComponent } from './container/forgot-password-component';
import { LoginComponent } from './container/login.component';
import { SignupComponent } from './container/signup.component';
import { VerificationComponent } from './container/verify-component';
import { AnonGuard } from './guards/anon-guard';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [{path:'login', component:LoginComponent,canActivate:[AnonGuard]},
{path:'signup', component:SignupComponent,canActivate:[AnonGuard]},
{path : 'forgot-password',component:forgotPassComponent,canActivate:[AnonGuard]},
{path:'verify',component:VerificationComponent,canActivate:[AnonGuard]}
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
