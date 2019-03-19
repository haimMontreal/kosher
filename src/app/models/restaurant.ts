import {Address} from './address';
import {Review} from './review';
// endregion

export class Restaurant {
  // region Attributes
  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;
  // endregion

  // region Default Methods
  constructor(args?) {
    if (args !== null) {
      this.name = args.name;
      this.website = args.website;
      this.phone = args.phone;
      this.rating = args.rating;
      this.avgMealPrice = args.avgMealPrice;

      this.location = new Address({})
      this.location.streetNumber =args.location.streetNumber;
      this.location.streetName =  args.location.streetName;
      this.location.city =  args.location.city;
      this.location.province = args.location.province;
      this.location.postalCode = args.location.postalCode;
      this.location.country = args.location.country;

    }
  }
  // endregion
}

  //end region


