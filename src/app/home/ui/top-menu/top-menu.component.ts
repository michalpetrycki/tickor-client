import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TopMenuParamHelperService } from 'src/app/home/data-access/top-menu.param.helper.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';


@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

    private controls!: ControlBase<any>[];
    @Output() selectionChangedEvent: EventEmitter<any>;
    isSelection = false;

    clientSelection = -1;
    projectSelection = -1;

    accountItems: string[];
    fields: Object;
    clientSelectionForm: FormGroup;

    get clientParam(): ControlBase<any> {
        return this.controls[0];
    }

    get projectParam(): ControlBase<any> {
        return this.controls[1];
    }

    constructor(
        private paramHelperService: TopMenuParamHelperService
    ) {
        this.accountItems = ['Sign in'];
        this.fields = { text: 'displayString', value: 'value' };

        this.controls = this.paramHelperService.getControls(this.fields);

        this.clientSelectionForm = new FormGroup({
            Client: new FormControl(),
            Project: new FormControl()
        });

        this.clientSelectionForm.get('Client')?.valueChanges.subscribe((clientID: number) => {
            this.clientSelection = clientID;
            this.isSelection = false;
        });
        this.clientSelectionForm.get('Project')?.valueChanges.subscribe((projectID: number) => {
            if (projectID) {
                this.projectSelection = projectID;
                this.isSelection = true;
            }
        });

        this.selectionChangedEvent = new EventEmitter<any>();

    }

    submitClientForm(): void {

        const filters = {
            clientID: this.clientSelectionForm.get('Client')?.value,
            projectID: this.clientSelectionForm.get('Project')?.value
        };

        if (filters.clientID && filters.projectID) {
            this.isSelection = true;
        }

        this.selectionChangedEvent.emit(filters);

    }



    admin(): void {
        this.accountItems = ['Item 1', 'Item 2', 'Item 3'];
    }

}
