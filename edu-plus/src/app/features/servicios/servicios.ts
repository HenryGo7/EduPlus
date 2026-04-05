import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curso } from '../../core/models/home.models';
import { CursosService } from '../../services/cursos/cursos.service';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

    listaCursos: Curso[] = [];
  
    constructor(
      private cursoService: CursosService
    ){}
  
    ngOnInit(): void {
      this.listaCursos = this.cursoService.getCursos();
    }

}
