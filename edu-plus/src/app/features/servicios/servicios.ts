import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curso } from '../../core/models/home.models';
import { CursosService } from '../../services/cursos/cursos.service';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

    listaCursos: Curso[] = [];
  
    constructor(
      private cursoService: CursosService,
      public modalService: ModalService
    ){}
  
    ngOnInit(): void {
      this.listaCursos = this.cursoService.getCursos();
    }

    verDetalle(curso: any){
      this.modalService.openDetail(curso);
    }
}
