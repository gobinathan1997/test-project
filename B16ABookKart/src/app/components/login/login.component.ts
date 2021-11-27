import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user:any;
  pass:any;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(username: any,password:any) {
    let user = {
      userId: 1,
      firstName: 'arvind',
      lastName: 'v',
      username: username,
      password: password,
      gender: 'male',
      userTypeId: 1,
    };

    this.authService.login(user).subscribe((Response) => {
      let res: any = Response;

      localStorage.setItem('username', res['userDetails']['username']);
      localStorage.setItem('token', res['token']);
      this.router.navigateByUrl('/checkout');
      console.log(localStorage);
    });
  }
   
}
