import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // user:any;
  // pass:any;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}



   proceed(){
     this.router.navigateByUrl('/payment');
   }


   logout(){
    let token:any = localStorage.clear()
    if(!token){
      this.router.navigate(["login"])
   }
}
}
