import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})

export class Detalle implements OnInit{

  curso: any;

  constructor(
    public modalServivce: ModalService
  ){}

  ngOnInit(): void {
    
  }

  verDetalle(curso: any){
    this.modalServivce.openDetail(curso);
  }

  cerrar(){
    
  }
}
