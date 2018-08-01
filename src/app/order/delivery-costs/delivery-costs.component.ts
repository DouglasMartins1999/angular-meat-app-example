import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styles: []
})
export class DeliveryCostsComponent implements OnInit {
  @Input() itensValue: number;
  @Input() deliveryCost: number;

  constructor() { }

  ngOnInit() {
  }

  get total(){
    return this.itensValue + this.deliveryCost
  }

}
