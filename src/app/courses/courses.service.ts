import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCursos(): string[] {
    return ['Java', 'JavaScript', 'TypeScript', 'Orientação a Objetos']
  }
}
