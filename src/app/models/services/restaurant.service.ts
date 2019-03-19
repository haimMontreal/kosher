import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];
  location: Address;
  constructor() {
    // TODO: Replace with API call
    this.restaurants = [
      new Restaurant({
        name: 'Mottel\'s Kitchen',
        phone: '(514) 555-2019',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 20,
        location: new Address ({
          streetNumber: 4,
          streetName: null,
          city: null,
          province: null,
          PostalCode: null,
          Province: null,
          Country: null
        })
      }),
      new Restaurant({
        name: 'Tav Cafe',
        phone: '(514) 112-3581',
        website: 'http://cafetav.com/',
        rating: 3,
        avgMealPrice: 15,
        location: new Address ({
          streetNumber: 4,
          streetName: 'Kildare',
          city: null,
          province: null,
          PostalCode: null,
          Province: 'QC',
          Country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Pizza Pita',
        phone: '(514) 234-1254',
        website: 'www.pizapita.com',
        rating: 6,
        avgMealPrice: 15,
        location: new Address ({
          streetNumber: 4,
          streetName: 'Kildare',
          city: null,
          province: null,
          PostalCode: null,
          Province: 'QC',
          Country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'HaiKitchen',
        phone: null,
        website: 'https://www.hai.com',
        rating: 5,
        avgMealPrice: 35,
        location: new Address({
          streetNumber: 7485,
          streetName: 'Guelph',
          city: 'Cote saint luc',
          province: 'QC',
          postalCode: 'H4W2L9',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Buggon',
        phone: '514-987-5689',
        website: 'https://www.facebook.com',
        rating: 8,
        avgMealPrice: 80,
        location: new Address({
          streetNumber: 54,
          streetName: 'Baily',
          city: 'Hampstead',
          province: 'QC',
          postalCode: 'H4W1H9',
          country: 'Canada'
        })
      })
    ];
  }

  // region Getters
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
  // endregion
}

