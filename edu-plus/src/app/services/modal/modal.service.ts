import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

@Injectable({ providedIn: 'root' })
export class ModalService {
  // private display = new BehaviorSubject<'open' | 'close'>('close');

  // watch$ = this.display.asObservable();

  // open() {
  //   this.display.next('open');
  // }

  // close() {
  //   this.display.next('close');
  // }

  private loginDisplay = new BehaviorSubject<'open' | 'close'>('close');
  loginWatch$ = this.loginDisplay.asObservable();

  private detailDisplay = new BehaviorSubject<'open' | 'close'>('close');
  detailWatch$ = this.detailDisplay.asObservable();

  private selectedCurso = new BehaviorSubject<any>(null);
  selectedCurso$ = this.selectedCurso.asObservable();

  openLogin() { this.loginDisplay.next('open'); }
  closeLogin() { this.loginDisplay.next('close'); }

  openDetail(curso: any) { 
    this.selectedCurso.next(curso);
    this.detailDisplay.next('open'); 
  }
  closeDetail() { 
    console.log('Cerrando modal...');
    this.detailDisplay.next('close'); 
    this.selectedCurso.next(null);
  }
}
