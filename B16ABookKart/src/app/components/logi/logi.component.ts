import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
// import { login } from 'src/app/services/user.model';

@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.scss']
})
export class LogiComponent  {
 
  

  constructor( private loginService : LoginService,private route:Router) { }

 
   
   loginForm = new FormGroup({
     username: new FormControl('',Validators.required),
     password: new FormControl('',Validators.required)
   });

   submit(){

   

      this.loginService.loginData(this.loginForm.value).subscribe( (data) =>{
        
        let res: any =(data);
        console.log(data);
        localStorage.setItem('username', res['userDetails']['username']);
        localStorage.setItem('token', res['token']);
        console.log(localStorage);
        this.route.navigateByUrl('/checkout');
      })
     
   }
}

