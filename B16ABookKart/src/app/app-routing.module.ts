import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { LogiComponent } from './components/logi/logi.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';

import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path:'orders' , component:OrdersComponent},
  { path:'checkout',component:CheckoutComponent},
  { path:'login',component:LoginComponent},

  { path:'payment',component:PaymentComponent ,canActivate:[AuthGuard]},
  { path: 'home',component:HomeComponent},
  { path:'logi',component:LogiComponent},
  { path: '', component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
