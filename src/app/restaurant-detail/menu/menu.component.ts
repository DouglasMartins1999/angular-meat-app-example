import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { RestaurantService } from '../../restaurants/restaurant.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items: Observable<any>

  constructor(private restaurantService: RestaurantService,
              private activeRoute: ActivatedRoute){}

  ngOnInit() {
    this.items = this.restaurantService.restaurants(this.activeRoute.parent.snapshot.params['id'], "menu")
  }

  addMenuItem(event){
    console.log(event)
  }

}
