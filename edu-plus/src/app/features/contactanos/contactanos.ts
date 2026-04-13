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

  onSubmit() {
    if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) return;
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
      this.enviado = true;
      this.formData = { nombre: '', email: '', asunto: '', mensaje: '' };
    }, 1200);
  }

  resetForm() {
    this.enviado = false;
  }


}
