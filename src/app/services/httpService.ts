import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { alertService } from './alert-service';
@Injectable()
export class HttpService{
  private baseUrl = 'http://localhost:5002/api';
constructor(private httpClient:HttpClient,private alertservice:alertService){
   
}
  get(url:string, paramData?:any):Observable<any>
  {
      const data = {params:paramData};
      return this.httpClient.get(this.baseUrl + url,data).pipe(catchError(this.errorHandler.bind(this)));
  }
  post(url:string,body?:any):Observable<any>
  {
    return this.httpClient.post(this.baseUrl + url,body ).pipe(catchError(this.errorHandler.bind(this)));
  }
  patch(url:string,body?:any):Observable<any>
  {
  return this.httpClient.patch(this.baseUrl + url,body ).pipe(catchError(this.errorHandler.bind(this)));

  }
  private errorHandler(response:any){
      const error = response.error;
      const message = response;
      const status = response.status;
      if(status == 401)
      {}
      this.alertservice.error (message,3500)
      return throwError({message,error});
  }
}