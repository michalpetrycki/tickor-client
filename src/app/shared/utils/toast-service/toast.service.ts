import { Injectable } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ToastUtility } from '@syncfusion/ej2-notifications';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    public toastObject?: ToastComponent;

    constructor() { }

    public showToast(args: any): void {

        this.toastObject = ToastUtility.show({
            title: args?.title ?? '',
            content: args?.content ?? '',
            timeOut: 10000,
            position: { X: 'Right', Y: 'bottom' },
            showCloseButton: true,
            click: this.toastClick.bind(this),
            buttons: [{
                model: { content: 'Close' }, click: this.closeToast.bind(this)
            }]
        }) as ToastComponent;

    }

    public closeToast(): void {
        this.toastObject?.hide();
    }

    public toastClick(): void {
        console.log('Toast click event is triggered');
    }

}
