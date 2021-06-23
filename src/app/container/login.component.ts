import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import{FormControl, FormGroup,Validators,} from'@angular/forms'
import { Router } from "@angular/router";
import { alertService } from "../services/alert-service";
import { ApiService } from "../services/api-service";
import { HttpService } from "../services/httpService";
@Component({
selector:'app-login',
template:`
<form id ="overlay"(ngSubmit)="this.loginform.valid && login()" [formGroup]="this.loginform" fxLayoutGap="30px" fxLayout="column" fxLayoutAlign="center center">

    <mat-card fxLayout="column" fxLayoutAlign="center ">
    <h1>Login</h1>
       <mat-form-field>
  
            <input matInput formControlName="email"  placeholder="Email" type="email"/>            
            <mat-error>Email is required
            </mat-error>
        </mat-form-field>

       <mat-form-field>

            <input matInput placeholder="Password" formControlName="password" type="password" />
            <mat-error>Password(8-10 words) is required
            </mat-error>
       </mat-form-field> 
       <a href="#" style="margin-top:20px;">forgot password?</a>
       <div id="button"fxLayout="row" fxLayoutAlign="center center" fxLayoutGap="30px">
        <mat-spinner *ngIf="this.loading" diameter="40"></mat-spinner> 
       <button mat-raised-button color="primary" type=""submit>Login</button>
          <button mat-raised-button color="accent"(click)="signup()">Signup</button>
             
       </div>
    </mat-card>




</form>`
,
styles:[`
mat-card{
    margin-top:100px;
        size:auto;
        background-color:#fff5e6;
    }
h1{
text-align:center;

}
#button{
margin-left:200px;

}




`]
         

})
export class LoginComponent{
loading = false;
loginform:FormGroup

constructor(private apiservice:ApiService,private alertservice : alertService,
    private router : Router){

    this.loginform = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password :new FormControl(null,[Validators.required])


    });
    
}
signup(){
    this.router.navigate(['signup']);
}
    login(){

        this.loading = true;
        const request = this.apiservice.loginAndSetToken(this.loginform.value);
        request.subscribe(data => {
            this.loading = false;
        },
        (error)=>{
            this.loading = false;
            console.log(error);
        }
        )
    }   
}