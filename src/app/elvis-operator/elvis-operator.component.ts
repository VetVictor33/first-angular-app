import { Component } from '@angular/core';
import { Task } from 'src/types/types';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.sass']
})

export class ElvisOperatorComponent {
  public task: Task = {
    title: 'Recriar o Facebook usando Java Web',
    developer: undefined
  }
}
