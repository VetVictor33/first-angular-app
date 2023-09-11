import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass'],
  // outputs:[]
})
export class OutputPropertyComponent {

  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter();

  public increment() {
    this.value++
    this.changedValue.emit({ newValue: this.value })
  }

  public decrement() {
    this.value--
    this.changedValue.emit({ newValue: this.value })
  }
}
