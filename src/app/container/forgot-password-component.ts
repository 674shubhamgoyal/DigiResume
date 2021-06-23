import { Component } from "@angular/core";
import{FormControl, FormGroup,Validators,} from'@angular/forms'
import { Router } from "@angular/router";
import { alertService } from "../services/alert-service";
import { ApiService } from "../services/api-service";

@Component({
    selector:'app-forgot-password',
    template:`
    
    <form [formGroup]="this.forgotPasswordForm"
    (ngSubmit)="this.forgotPasswordForm.valid && this.isEmailSent ? sendEmail():changePassword()"
     fxLayout="column" fxLayoutAlign="center center">
    
    <mat-card fxLayout="column" fxLayoutAlign="center ">
    
        <h1>    Forgot Password ?</h1>
        <div fxLayout="column" *ngIf="!this.isEmailSent">
        <mat-form-field >
                 <input matInput  formControlName="email" placeholder="Email"/>
                 <mat-error>Email is Required</mat-error>
  
        </mat-form-field>
        <div fxLayoutAlign="center center" fxLayout="column">

        <button  mat-raised-button  color="accent">Send Email</button>
        <mat-spinner diameter="40" style="margin-top:15px;" *ngIf="this.loading"></mat-spinner >
        </div>
        </div>  
        <div fxLayout="column" *ngIf="this.isEmailSent">
        <mat-form-field>
              <input matInput placeholder="Code" formControlName="code" type="text" />
              <mat-error>Code is required</mat-error>
        </mat-form-field>
        <mat-form-field>
              <input matInput placeholder="New Password" formControlName="new_password" />
              <mat-error>New Password is required</mat-error>
        </mat-form-field>
        <mat-form-field>
              <input matInput placeholder="Confirm Password" formControlName="confirm_password" />
              <mat-error>Confirm Password is required</mat-error>
        </mat-form-field>
     <div fxLayout="row" fxLayoutGap="20px">
     <mat-spinner diameter="40" *ngIf="this.loading"></mat-spinner>
        <button mat-raised-button  type="submit"color = "accent">Change Passord</button>
        <button mat-raised-button color = "accent" (click)="login()">Back To Login</button>
     </div>
        </div>
     </mat-card>
    
    </form>
    
    
    ` ,
    styles:[`
    mat-card{
        margin-top:100px;
        background-color:#fff5e6;
        height:auto;
        width:auto;
    }
    h1{
    text-align:center;

    
    }
    button{
        margin-top:20px;
        width:300px;
        
        text-align:center;
            
    }`]
})

export class forgotPassComponent{
    forgotPasswordForm : FormGroup;
    isEmailSent =false;
    loading = false;
    constructor(private router:Router,private apiservice:ApiService,private alertservice:alertService){
        this.forgotPasswordForm = new FormGroup({
            email : new FormControl(null,!this.isEmailSent?[Validators.required]:[]),
            code : new FormControl(null),
            new_password : new FormControl(null),
            confirm_password : new FormControl(null)

        })
    }
  sendEmail(){
      this.loading = true;
      console.log('email sent');
      this.apiservice.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe(data=>{
        this.loading = false;
        console.log(data);

      this.isEmailSent = true;
     
      this.alertservice.success('Email Sent',3500);
      this.forgotPasswordForm.get('code')?.setValidators([Validators.required])
      this.forgotPasswordForm.get('new_password')?.setValidators([Validators.required])

      this.forgotPasswordForm.get('confirm_password')?.setValidators([Validators.required])
      },error=>{
          this.loading = false;
          this.alertservice.error(error.message,3500);
      }
  )
}
  changePassword(){  
      this.loading = true;
      const observer = this.apiservice.resetPassword(this.forgotPasswordForm.value);
      observer.subscribe(data=>{
          console.log(data);
          this.loading  = false;
          this.alertservice.success('Password changed',3500);
      },error=>{
          console.log(error);
          this.alertservice.error(error.message,3500);
      }
      
      )
      

      console.log('password has changed');
  }
    forgot(){
       console.log(this.forgotPasswordForm.value);
    }
 login(){
     this.router.navigate(['login']);
 }   
    
}