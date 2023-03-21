import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ToastService } from 'src/app/Services/toast/toast.service';
import { ToastData } from 'src/app/Objects/interfaces/ToastData';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastPopupComponent implements OnInit {

  @ViewChild('toast') toast!: ToastComponent;
  public position = { X: 'Center', Y: 'Bottom' };
  public buttons = [{ model: { content: 'OK' }, click: this.btnToastClick.bind(this) }];
  
  constructor(private toastService: ToastService) {
    this.toastService.getObservable().subscribe((abcd: ToastData) => {
      this.displayToast(abcd);
    });
  }

  ngOnInit(): void { }

  displayToast(toastData: ToastData): void {
    const title: string = toastData.success ? 'Success': 'Failure';
    const cssClass: string = toastData.success ? 'success': 'failure';
    this.toast.animation.show = { effect: 'ZoomIn', duration: 300, easing: 'linear' };
    this.toast.show({ timeOut: 100000, content: toastData.message, title: title, cssClass: cssClass });
  }

  btnToastClick() {
    this.toast.animation.hide = { effect: 'ZoomOut', duration: 300, easing: 'linear' };
    this.toast.hide();
  }

}
