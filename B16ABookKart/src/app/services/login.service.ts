import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  loginApi: any ='https://bookcart.azurewebsites.net/api/Login';
   
  
  constructor( private http:HttpClient) { }

  

  loginData(login:any){
       return this.http.post<login[]>(this.loginApi ,login)
  }

}
