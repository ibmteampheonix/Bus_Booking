import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatesComponent } from './Bus/seates/seates.component';
import { ShowBusesComponent } from './Bus/show-buses/show-buses.component';
import { LoginComponent } from './User/login/login.component';
import { PassengerdetailsComponent } from './User/passengerdetails/passengerdetails.component';
import { PaymentComponent } from './User/payment/payment.component';
import { SignUpComponent } from './User/signup/signup.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent },
  {path:"passengerdetails",component:PassengerdetailsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"seats",component:SeatesComponent},
  {path:"show-buses",component:ShowBusesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
