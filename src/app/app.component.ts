import { Component } from '@angular/core';
import { alertService } from './services/alert-service';
import { ApiService } from './services/api-service';
import { HttpService } from './services/httpService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiResume';
   constructor(){
    
  }
 
   
}
