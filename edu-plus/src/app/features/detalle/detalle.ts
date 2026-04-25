import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})

export class Detalle implements OnInit{

  curso: any;
  isOpen = false;
  private subscriptions: Subscription = new Subscription();
  
  constructor(
    public modalService: ModalService
  ){}

  ngOnInit(): void {
    this.subscriptions.add(
      this.modalService.detailWatch$.subscribe(state => {
        this.isOpen = state === 'open';
      })
    );
    this.subscriptions.add(
      this.modalService.selectedCurso$.subscribe(curso => {
        this.curso = curso;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  verDetalle(curso: any){
    console.log('Abriendo curso:', curso);
    this.modalService.openDetail(curso);
  }

  cerrar(){
    this.modalService.closeDetail();
  }
}
