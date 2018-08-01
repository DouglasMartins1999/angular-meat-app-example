import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/menu/shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  @Input() itens: CartItem[] = [];

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem): void {
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem): void {
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem): void {
    this.remove.emit(item)
  }
}
