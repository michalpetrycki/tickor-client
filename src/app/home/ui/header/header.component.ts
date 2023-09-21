import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() selectionChangedEvent: EventEmitter<any>;

    constructor() {
        this.selectionChangedEvent = new EventEmitter<any>();
    }

    ngOnInit(): void {
    }

    selectionChanged(event: any): void {
        this.selectionChangedEvent.emit(event);
    }

}
