import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: string = 'https://bookcart.azurewebsites.net/api/Login';
  
  


  constructor(private http: HttpClient, private router: Router) {}

  login(user:any ) {
    return this.http.post(this.users, user);
    
  }

  loggedIn() {
    return !! localStorage.getItem("token");
    
  }

  



}