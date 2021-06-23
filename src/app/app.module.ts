import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './container/login.component';
import { SignupComponent } from './container/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpService } from './services/httpService';
import { ApiService } from './services/api-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { alertService } from './services/alert-service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {forgotPassComponent} from'./container/forgot-password-component'
import { VerificationComponent } from './container/verify-component';
import { AuthGuard } from './guards/auth-guard';
import {  AnonGuard } from './guards/anon-guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
   forgotPassComponent,
   VerificationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpService,ApiService,alertService,AuthGuard,AnonGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
