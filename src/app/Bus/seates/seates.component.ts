import { Component, OnInit } from '@angular/core';
declare const myFunction:any;
@Component({
  selector: 'app-seates',
  templateUrl: './seates.component.html',
  styleUrls: ['./seates.component.css']
})
export class SeatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    myFunction();
  }

}
