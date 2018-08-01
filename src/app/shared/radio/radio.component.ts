import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioOptions } from './radio-options.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() radioOptions: RadioOptions[]
  value: any;
  onChange: any;

  constructor() { }

  ngOnInit() {
    this.value = this.radioOptions[0].value
  }

  setValue(value){
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any):void {
    this.value = obj;
  }

  registerOnChange(fn: any):void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any):void { 
  }
}
