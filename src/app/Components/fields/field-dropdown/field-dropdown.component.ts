import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldSettingsModel, FilteringEventArgs, SelectEventArgs } from '@syncfusion/ej2-dropdowns';
import { of } from 'rxjs';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { DropdownOption } from 'src/app/Objects/params/DropdownOption';
import { Param } from 'src/app/Objects/params/Param';

@Component({
    selector: 'app-field-dropdown',
    templateUrl: './field-dropdown.component.html',
    styleUrls: ['./field-dropdown.component.scss']
})
export class FieldDropdownComponent implements OnInit {

    @Input() param!: Param;
    @Input() formGroup!: FormGroup;
    @ViewChild('ddl') ddl: any;

    filteredItems: any;

    constructor() {

    }

    ngOnInit(): void {
        this.loadItems();
    }

    public onFiltering(e: FilteringEventArgs): void {
        // this.filteredItems = this.param.values!.filter((item: any) => item.value.toLowerCase().startsWith(e.text));
    }

    public select(event: SelectEventArgs) {
        if (this.param.onValueChanges) this.param.onValueChanges(Number(event.itemData.value));
    }


    private loadItems(): void {
        this.param.values$?.subscribe((res: any) => {
            this.ddl.value = null;
            this.filteredItems = res;
        });
    }

}
