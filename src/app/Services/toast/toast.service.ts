import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastData } from 'src/app/Objects/interfaces/ToastData';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  openToastEvent: Subject<ToastData> = new Subject<ToastData>();

  constructor() { }

  openToast(abcd: ToastData): void {
    this.openToastEvent.next(abcd);
  }

  getObservable(): Observable<ToastData> {
    return this.openToastEvent.asObservable();
  }

}
