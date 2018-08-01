import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-rating',
  templateUrl: './order-rating.component.html',
  styles: []
})
export class OrderRatingComponent {
  rates: number[] = [1,2,3,4,5]
  rate: number = 0;
  previewRate: number;
  @Output() done = new EventEmitter

  constructor() { }

  setRate(position){
    this.rate = position;
    this.previewRate = undefined
    this.done.emit(this.rate)
  }

  setPreviewRate(position){
    if(this.previewRate === undefined){
      this.previewRate = this.rate
    }
    this.rate = position
  }

  unsetPreviewRate(position){
    if(this.previewRate !== undefined){
      this.rate = this.previewRate
    }
  }

}
