import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal/modal-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  constructor(public modal:ModalService){}

  vistaActual: 'login' | 'recuperar' | 'emailEnviado' = 'login';
  emailRecuperacion = '';

  enviarRecuperacion() {
    if (!this.emailRecuperacion) return;
    // aquí tu llamada al servicio de auth
    this.vistaActual = 'emailEnviado';
  }

  ngOnInit(): void {

  }

  cerrar(){
    this.modal.close();
  }
}
