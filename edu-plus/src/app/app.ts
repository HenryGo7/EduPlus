import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/header/header";
import { Footer } from './core/footer/footer';
import { Login } from "./core/auth/login/login";
import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal/modal.service';
import { Detalle } from "./features/detalle/detalle";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Footer,
    Login,
    Detalle
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  constructor(
    public modalService: ModalService
  ){}

  protected readonly title = signal('edu-plus');
}
