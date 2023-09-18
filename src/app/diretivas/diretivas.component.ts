import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.sass']
})
export class DiretivasComponent {

  public title = '*ngIf && *ngFor';
  public courses: string[] = ['Java', 'Angular', 'AWS', 'TypeScript'];
  public showCourses = true;

  public selectedPage = 'home';
  public changeColor = true;

  public onShowCourses(): void {
    this.showCourses = !this.showCourses
  }

}
