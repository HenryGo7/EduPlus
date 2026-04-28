import { Injectable } from '@angular/core';
import { Curso } from '../../core/models/home.models';
import { LISTA_CURSOS } from '../../data/home.data';

@Injectable({
  providedIn: 'root',
})

export class HomeService {

  constructor(){}

  getCursos(): Curso[]{
    return LISTA_CURSOS;
  }

}
