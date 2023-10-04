import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications/src';

@Component({
    selector: 'app-toast-notification',
    templateUrl: './toast-notification.component.html',
    styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent {

    @ViewChild('element') element!: ToastComponent;

    constructor() { }

    onCreate() {
        this.element.show();
    }


}
