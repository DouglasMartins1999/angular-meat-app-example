import { Component, OnInit, Input } from '@angular/core';
import { RestaurantModel } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {
  @Input() itens: RestaurantModel;
  
  constructor() { }

  ngOnInit() {
  }

}
