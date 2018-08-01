import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear(){
    this.shoppingCartService.clear()
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item)
  }
  removeItem(item){
    this.shoppingCartService.removeItem(item)
  }
}
