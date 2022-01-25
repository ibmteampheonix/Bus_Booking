import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/signup/signup.component';
import { ShowBusesComponent } from './Bus/show-buses/show-buses.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { PassengerdetailsComponent } from './User/passengerdetails/passengerdetails.component';
import { PaymentComponent } from './User/payment/payment.component';
import { SeatesComponent } from './Bus/seates/seates.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ShowBusesComponent,
    HomepageComponent,
    PassengerdetailsComponent,
    PaymentComponent,
    SeatesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
