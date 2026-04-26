import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css',
})
export class Contactanos {

formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;
  cargando = false;
  envioError = false;
  mensajeError = '';
  referenciaCaso = '';

  get nombreEsValido(): boolean {
    return this.formData.nombre.trim().length >= 3;
  }

  get emailEsValido(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email.trim());
  }

  get mensajeEsValido(): boolean {
    return this.formData.mensaje.trim().length >= 10;
  }

  get puedeEnviar(): boolean {
    return this.nombreEsValido && this.emailEsValido && this.mensajeEsValido && !this.cargando;
  }

  private generarReferenciaCaso(): string {
    const marca = Date.now().toString().slice(-6);
    const aleatorio = Math.floor(Math.random() * 900 + 100);
    return `EDU-${marca}-${aleatorio}`;
  }

  onSubmit() {
    if (!this.puedeEnviar) return;

    this.enviado = false;
    this.envioError = false;
    this.mensajeError = '';
    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;

      // Simula falla de red para mostrar el estado de error y opcion de reintento.
      const falloSimulado = this.formData.email.toLowerCase().includes('error');

      if (falloSimulado) {
        this.envioError = true;
        this.mensajeError = 'No pudimos enviar tu mensaje por un problema temporal. Intenta nuevamente.';
        return;
      }

      this.referenciaCaso = this.generarReferenciaCaso();
      this.enviado = true;
      this.formData = { nombre: '', email: '', asunto: '', mensaje: '' };
    }, 1200);
  }

  reintentarEnvio() {
    this.envioError = false;
    this.mensajeError = '';
    this.onSubmit();
  }

  resetForm() {
    this.enviado = false;
    this.envioError = false;
    this.mensajeError = '';
    this.referenciaCaso = '';
  }


}
