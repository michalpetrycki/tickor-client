import { EventEmitter, Injectable } from '@angular/core';
import { ButtonModelPropsModel, ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ToastUtility } from '@syncfusion/ej2-notifications';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    public toastObject?: ToastComponent;
    public retrySubject!: Subject<void>;

    constructor() {
        this.retrySubject = new Subject();
    }

    public showToast(args: any): void {

        let buttons: ButtonModelPropsModel[] = [{
            model: { content: 'OK' },
            click: this.closeToast.bind(this)
        }];

        if (!args.success) {

            buttons.push({
                model: { content: 'Retry' },
                click: this.retryClick.bind(this)
            });
        }

        this.toastObject = ToastUtility.show({
            title: args?.title ?? '',
            content: (args?.content ?? '') + (args?.errors ? '<br>' + args?.errors?.join('<br>') : ''),
            timeOut: 10000,
            position: { X: 'Right', Y: 'bottom' },
            showCloseButton: true,
            click: this.toastClick.bind(this),
            buttons,
            cssClass: args?.success ? 'e-toast-success' : 'e-toast-danger',
        }) as ToastComponent;

    }

    public closeToast(): void {
        this.toastObject?.hide();
    }

    public toastClick(): void {
        this.closeToast();
    }

    public retryClick(): void {
        this.retrySubject.next();
    }

}
