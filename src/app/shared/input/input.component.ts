import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel
  input: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.touched || this.input.dirty);
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }
}
