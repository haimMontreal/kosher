import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/Restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // rests: Restaurant[];

constructor() {
/*
  this.rests = [];


  let r1 = new Restaurant();
  r1.name = 'TAV Cafe';
  r1.website = 'http://tavcollege.ca';
  r1.phone = '(514) 112-9875';
  r1.rating = 3;
  r1.avgMealPrice = 3;
  this.rests.push(r1);

  r1 = new Restaurant();
  r1.name = 'Pizza Pita';
  // r2.website = 'http://tavcollege.ca';
  r1.phone = '(514) 731-7482';
  r1.rating = 4;
  r1.avgMealPrice = 2;

  this.rests.push(r1);


  r1 = new Restaurant();
  r1.name = 'Yakimono';
  r1.website = 'http://yakimono.ca';
  r1.rating = 5;
  r1.avgMealPrice = 4;
  this.rests.push(r1);
*/

}

ngOnInit(): void {
}
}


