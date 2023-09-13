import { Component } from '@angular/core';

@Component({
  selector: 'app-help-dom-manipulation',
  templateUrl: './help-dom-manipulation.component.html',
  styleUrls: ['./help-dom-manipulation.component.sass']
})
export class HelpDomManipulationComponent {

  public iCommandLittleNumberToBe: number = 1;
  public doIPermitLittleNumberToBeAlive: boolean = true;

  public lemmeChangeYouLittleNumber() {
    this.iCommandLittleNumberToBe++
  }

  public changeMyWill() {
    this.doIPermitLittleNumberToBeAlive = !this.doIPermitLittleNumberToBeAlive
  }

}
