import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Data: any
  constructor(private API: HomeService) {
    console.log("----------------- first AppComponent----------------------")

    console.log(this.Data)

  }
  ngOnInit() {
    this.API.getData()
      .subscribe((response: any) => {
        console.log("-----------------  response----------------------")
        this.Data = response;
      });
    console.log(this.Data)
    console.log("--------0--------- end AppComponent----------------------")
    // Wait for the given amount of time

  }

}
