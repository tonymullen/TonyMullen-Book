import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: [string];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }
  
  location: Location = {
    _id: '57a2b839e57a8d8da34db894',
    name: 'Island Bliss Booze and Treats',
    distance: 1500.012,
    address: 'Someplace Awesome, USA',
    rating: 3,
    facilities: ['hot drinks', 'food', 'power']
  }
  

  ngOnInit() {
  }

}
