import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurant.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant;

  constructor(public restaurantService: RestaurantService,
              public activeRoutes: ActivatedRoute){}

  ngOnInit() {
    this.restaurantService.restaurants(this.activeRoutes.snapshot.params['id'])
      .subscribe(details => this.restaurant = details)
  }

}
