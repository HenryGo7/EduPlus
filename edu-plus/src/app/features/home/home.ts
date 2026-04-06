import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/models/home.models';
import { HomeService } from '../../services/home/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit{

  listaCursos: Curso[] = [];

  constructor(
    private homeService: HomeService
  ){}

  ngOnInit(): void {
    this.listaCursos = this.homeService.getCursos();
  }

  verDetalle(curso: any){

  }
}
