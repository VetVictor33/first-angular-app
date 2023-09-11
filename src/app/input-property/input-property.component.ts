import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.sass'],
  // inputs: ['courseName']
})
export class InputPropertyComponent {

  @Input() courseName: string = '';
}
