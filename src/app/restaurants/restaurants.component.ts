import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: RestaurantModel[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(response => this.restaurants = response);
  }

}
