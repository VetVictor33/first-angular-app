import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass'],
  // outputs:[]
})
export class OutputPropertyComponent {

  @Input()
  public value = 0;

  @Output()
  public changedValue = new EventEmitter();

  @ViewChild('inputValue')
  inputValue!: ElementRef<HTMLInputElement>;

  public increment() {
    const { value } = this.inputValue.nativeElement
    console.log(value)
    this.value++
    this.changedValue.emit({ newValue: this.value })
  }

  public decrement() {
    this.value--
    this.changedValue.emit({ newValue: this.value })
  }
}
