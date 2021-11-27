import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  
  { path:'checkout',component:CheckoutComponent},
  { path:'login',component:LoginComponent},

  { path:'payment',component:PaymentComponent ,canActivate:[AuthGuard]},
  { path: '',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
