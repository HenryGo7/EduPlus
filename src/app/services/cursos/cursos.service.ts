import { Injectable } from '@angular/core';
import { Curso } from '../../core/models/home.models';
import { LISTA_CURSOS } from '../../data/cursos.data';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

    constructor(){}
  
    getCursos(): Curso[]{
      return LISTA_CURSOS;
    }
    
}
