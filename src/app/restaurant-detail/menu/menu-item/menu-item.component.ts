import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styles: []
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @Output() event = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.event.emit(this.item)
  }

}
