import { Component, OnInit } from '@angular/core';
declare const myfunc:any;
declare const hideabout:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    myfunc();
    hideabout();
  }

}
