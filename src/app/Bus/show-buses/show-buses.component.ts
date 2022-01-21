import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {

  constructor(private http:HttpClient) { }
    ngOnInit()
    {
      let response = this.http.get("http://localhost:8890/route");
      response.subscribe((data: any)=>console.log(data));
    }

}
