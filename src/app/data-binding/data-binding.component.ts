import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent {

  public mainTitle = 'Data Bing';

  public propBingTitle = 'Property Binding';
  public imgUrl = 'https://picsum.photos/200/300';

  public classBinding = 'Property Binding (style)';

  public eventBindingTitle = 'Event Binding';
  public inputValue = 'Digite algo aí, meu rei';
  public enderInputValue = 'Salve aqui após o enter';

  public twoWayDataBindingTitle = 'Two-way data binding';
  public name = 'Digite seu nome';
  public email = 'Digite seu email';
  public password = 'Digite sua senha';
  public passwordConfirmation = 'Confirme a senha';

  public courseName = 'Java no Back, Angular no Front';

  public onKeyUp(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  public saveWithEnder(value: string) {
    this.enderInputValue = value
  }

  public changeName(newName: string) {
    this.name = newName
  }

  public onChangedValue(event: { newValue: number }) {
    console.log(event.newValue)
  }

}
