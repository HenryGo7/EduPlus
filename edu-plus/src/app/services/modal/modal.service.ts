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

  private detailDisplay = new BehaviorSubject<any>(null);
  detailWatch$ = this.detailDisplay.asObservable();

  openLogin() { this.loginDisplay.next('open'); }
  closeLogin() { this.loginDisplay.next('close'); }

  openDetail(curso: any) { this.detailDisplay.next(curso); }
  closeDetail() { this.detailDisplay.next(null); }
}
