import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  branches: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get( 'http://localhost:3011/branch' )
      .subscribe( (data) => {
        console.log(data);
        this.branches = data;
      });
  }

}
