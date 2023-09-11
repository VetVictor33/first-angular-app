import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent {

  public mainTitle: string = 'Data Bing';

  public propBingTitle: string = 'Property Binding';
  public imgUrl: string = 'https://picsum.photos/200/300';

  public classBinding: string = 'Property Binding (style)';

  public eventBindingTitle: string = 'Event Binding'
  public inputValue: string = 'Digite algo aí, meu rei'
  public enderInputValue: string = 'Salve aqui após o enter'

  public twoWayDataBindingTitle: string = 'Two-way data binding'
  public name: string = 'Digite seu nome';
  public email: string = 'Digite seu email';
  public password: string = 'Digite sua senha'
  public passwordConfirmation: string = 'Confirme a senha'

  public onKeyUp(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  public saveWithEnder(value: string) {
    this.enderInputValue = value
  }

  public changeName(newName: string) {
    this.name = newName
  }

}
