import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/models/home.models';
import { HomeService } from '../../services/home/home.service';
import { CommonModule } from '@angular/common';
import { Detalle } from "../detalle/detalle";
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Detalle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit{

  listaCursos: Curso[] = [];

  constructor(
    public homeService: HomeService,
    public modalService: ModalService
  ){}

  ngOnInit(): void {
    this.listaCursos = this.homeService.getCursos();
  }

  verDetalle(curso: any){
    this.modalService.openDetail(curso);
  }
}
