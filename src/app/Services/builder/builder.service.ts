import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuilderService<T> {

  private showDialogSubject: Subject<boolean> = new Subject();
  private closeSubject: Subject<any> = new Subject();
  private newEntityProperties: Subject<T> = new Subject<T>();

  constructor() { }

  openDialog(): void {
    this.showDialogSubject.next(true);
  }

  closeDialog(): void {
    this.showDialogSubject.next(false);
  }

  getShowDialogObservable(): Observable<any> {
    return this.showDialogSubject.asObservable();
  }

  emitNewEntityProperties(props: T): void {
    this.newEntityProperties.next(props);
  }

  getNewEntityProperitesObservable(): Observable<T> {
    return this.newEntityProperties.asObservable();
  }

}
