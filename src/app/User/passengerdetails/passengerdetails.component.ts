import { Component, OnInit } from '@angular/core';
declare const seatCheck:any;
declare const printsb:any;
@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // onload(){
  //   seatCheck();
  onClick(){
      printsb();

    }
  }

