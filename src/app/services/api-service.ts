import {HttpService} from './httpService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService{
private static  AUTH_TOKEN = "auth token"

constructor(private httpservice : HttpService){

}
static getAuthToken(){

  return localStorage.getItem(this.AUTH_TOKEN)
 }
static setAuthToken(value:any){


   localStorage.setItem(this.AUTH_TOKEN,value)
 }
static  removeAuthToken(){

   localStorage.removeItem(this.AUTH_TOKEN)
}
   getUsers(){
     return this.httpservice.get('/users');
 }
    signup(data:{email:string,password:string,confirm_password:string,name:string,job_category:string,experience_level:string}){
      console.log(data);
    return this.httpservice.post('/user/signup',data);
    }
   loginAndSetToken(data:{email:string,password:string}){
       return this.httpservice.get('/user/login',data).pipe(map(res=> {
        ApiService.setAuthToken(res.token)
        return res;

       }));

   }

   
  sendResetPasswordEmail(data:{email:string}):Observable<any>{
     return this.httpservice.get('/user/reset/password/email/',data);

   }
   resetPassword(data:{code:string,
    new_password:string,confirm_password:string}){
      return this.httpservice.patch('/user/reset/password',data);

   }
    }
