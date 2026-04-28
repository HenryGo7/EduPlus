import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  constructor(public modal: ModalService) {}

  vistaActual: 'login' | 'recuperar' | 'emailEnviado' | 'registro' | 'registroExitoso' = 'login';
  emailRecuperacion = '';
  mostrarPassword = false;
  mostrarConfirm = false;
  errorRegistro = '';

  registroData = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    confirmar: ''
  };

  enviarRegistro() {
    this.errorRegistro = '';

    if (this.registroData.password !== this.registroData.confirmar) {
      this.errorRegistro = 'Las contraseñas no coinciden.';
      return;
    }

    if (this.registroData.password.length < 8) {
      this.errorRegistro = 'La contraseña debe tener al menos 8 caracteres.';
      return;
    }

    // aquí tu llamada al servicio de auth/registro
    this.vistaActual = 'registroExitoso';
  }

  enviarRecuperacion() {
    if (!this.emailRecuperacion) return;
    // aquí tu llamada al servicio de auth
    this.vistaActual = 'emailEnviado';
  }

  cerrar() {
    this.modal.closeLogin();
  }

  ngOnInit(): void {}
}
