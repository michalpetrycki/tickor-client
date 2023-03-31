import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ToastService } from 'src/app/Services/toast/toast.service';
import { ToastData } from 'src/app/Objects/interfaces/ToastData';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastPopupComponent {

  @ViewChild('toast') toast!: ToastComponent;
  public position = { X: 'Center', Y: 'Bottom' };
  public buttons = [{ model: { content: 'OK' }, click: this.closeToast.bind(this) }];
  public isToastOpened = false;

  constructor(private toastService: ToastService) {
    this.toastService.getObservable().subscribe((abcd: ToastData) => {
      this.displayToast(abcd);
    });
  }

  displayToast(toastData: ToastData): void {
    if (this.isToastOpened === false) {
      const title: string = toastData.success ? 'Success' : 'Failure';
      const cssClass: string = toastData.success ? 'success' : 'failure';
      this.toast.animation.show = { effect: 'ZoomIn', duration: 300, easing: 'linear' };
      this.toast.show({ timeOut: 1000, content: toastData.message, title: title, cssClass: cssClass });
      this.isToastOpened = true;
    }
  }

  closeToast(): void {
    if (this.isToastOpened) {
      this.toast.animation.hide = { effect: 'ZoomOut', duration: 300, easing: 'linear' };
      this.toast.hide();
      this.isToastOpened = false;
    }
  }

}
