import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent {
  companyName: string;
  courses: string[];

  //injeção de dependência no construtor
  constructor(private coursersService: CoursesService) {
    this.companyName = 'Loco Cursos';
    this.courses = this.coursersService.getCursos()
  }
}
