import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from '../../restaurants/restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
  avaliate: Observable<any>

  constructor(private restaurantService: RestaurantService,
              private activeRoute: ActivatedRoute){}

  ngOnInit() {
    this.avaliate = this.restaurantService.restaurants(this.activeRoute.parent.snapshot.params['id'], 'review')
  }

}
