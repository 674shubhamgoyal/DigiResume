import { Component } from "@angular/core";

@Component({
 selector:'app-verification',
 template:`
<div class="overlay" fxLayout="column" fxLayoutAlign="center center" >
  <mat-card fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50 px" fxFlex="100%">
  <mat-icon inline>unsubscribe</mat-icon>   
  <div  fxLayout="column" fxLayoutAlign="center center">
        <h1>
             You haven't verified your Email
        </h1>
        <p class="para">
            Please verify the email which is sent to shagungarg@gmail.com
        </p>
        <button mat-raised-button color="primary">Send Email</button>
    </div>
  </mat-card>

</div>


 `,
 styles:[`
 .overlay{
     width:100%;
     height : 100%;
     
     background:linear-gradient(to right bottom, rgb(125, 226, 97),rgb(66,123,181));

 }
 mat-icon{
     margin:30px;
 }
 button{
     margin-top:30px;
 }
 mat-card{ background-color:#ffe699;
       max-height:50% !important;
        max-width:50% !important;
       
    }
    h1{
        font-weight : bold;
        font-size:1.8rem;
    }
    mat-icon{
        font-size:6rem !important;
    }
    .para{
       color: #008000;
       font-size:1.3rem;
       text-align:center;
    }
 `]


})
export class  VerificationComponent{}