import { Component } from "@angular/core";
import { FormGroup,Validators,FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../services/api-service";

@Component({
selector:'app-signup',
template:`<form id ="overlay" (ngSubmit)="this.signupform.valid && signup()"[formGroup]="this.signupform" fxLayoutGap="30px" fxLayout="column" fxLayoutAlign="center center">

<mat-card fxLayout="column" fxLayoutAlign="center ">
<h1>Signup</h1>
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
   <mat-form-field>
   <input matInput formControlName="confirm_password"  placeholder="Confirm Password" type="text"/>            
   <mat-error> Job Category  is required
   </mat-error>
</mat-form-field>
<mat-form-field>
<input matInput formControlName="name"  placeholder="Name" type="email"/>            
<mat-error> Name is required
</mat-error>
</mat-form-field>
   <mat-form-field>
   <input matInput formControlName="job_category"  placeholder="Job Category" type="text"/>            
   <mat-error> Name is required
   </mat-error>
</mat-form-field>
<mat-form-field>
<input matInput formControlName="experience_level"  placeholder="Experience level" type="text"/>            
<mat-error> Experience level is required
</mat-error>
</mat-form-field>
   <a href="#" style="margin-top:20px;">forgot password?</a>
 
   <div id="button"fxLayout="row" fxLayoutGap="30px">
   <mat-spinner diameter="40" *ngIf="this.loading"></mat-spinner>   
   <button mat-raised-button color="primary" (click)="login()">Back to login</button>
      <button mat-raised-button color="accent" type="submit">Submit</button>
         
   </div>
</mat-card>




</form>`
,
styles:[
   `
   mat-card{
   margin-top:50px;
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
export class SignupComponent{

signupform:FormGroup;
loading = false;
constructor(private router:Router ,private apiservice:ApiService){

    this.signupform = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
    confirm_password: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    job_category :  new FormControl(null,[Validators.required]),
    experience_level : new FormControl(null,[Validators.required]),



    })
}
login(){
   this.router.navigate(['login']);
}
signup(){
   this.loading = true;
   this.apiservice.signup(this.signupform.value).subscribe(data=>{
      console.log(data);
      this.loading = false;
   },(error)=>{
      this.loading = false;
      console.log(error);
   }
   );
   



}

}