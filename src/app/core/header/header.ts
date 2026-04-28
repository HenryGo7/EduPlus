import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Login } from '../auth/login/login';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{

  mostrarModalLogin = false;

  constructor(
    public modalService: ModalService
  ){}

  ngOnInit(): void {

  }

  abrirLogin(){
    this.modalService.openLogin();
  }
  
}
