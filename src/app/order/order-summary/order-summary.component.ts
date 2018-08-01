import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  rate: number = 0;

  constructor() { }

  ngOnInit() {
  }

  setRate($event): void {
    this.rate = $event
  }

}
