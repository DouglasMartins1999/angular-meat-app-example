import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RadioOptions } from '../shared/radio/radio-options.model';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  options: RadioOptions[] = [
    {
      label: "Dinheiro",
      value: "MON"
    },
    {
      label: "Cartão de Débito",
      value: "DEB"
    },
    {
      label: "Cartão de Crédito",
      value: "CRE"
    },
    {
      label: "Vale Refeição/Alimentação",
      value: "REF"
    }
  ]

  constructor(public orderService: OrderService, private router: Router) {}

  cartItens(): any[] {
    return this.orderService.cartItens;
  }

  deliveryCost(): number {
    return this.orderService.deliveryCost;
  }

  totalValue(): number{
    return this.orderService.totalValue()
  }

  remove(item):void {
    this.orderService.removeItem(item)
  }

  increaseQty(item):void {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item):void {
    this.orderService.decreaseQty(item)
  }

  ngOnInit() {
  }

  checkOrder(order: Order):void {
    order.orderItens = this.cartItens()
      .map(item => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
      .subscribe((orderID: string) => {
        console.log(`Compra Concluída: ${orderID}`)
        this.orderService.clearList()
        this.router.navigate(['order-summary'])
      })
  }

}
