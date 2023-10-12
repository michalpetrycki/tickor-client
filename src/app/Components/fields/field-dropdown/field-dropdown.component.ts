import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilteringEventArgs, SelectEventArgs } from '@syncfusion/ej2-dropdowns';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Component({
    selector: 'app-field-dropdown',
    templateUrl: './field-dropdown.component.html',
    styleUrls: ['./field-dropdown.component.scss']
})
export class FieldDropdownComponent implements OnInit {

    @Input() control!: ControlBase<string>;
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
        if (this.control.onValueChanges) this.control.onValueChanges(Number(event.itemData.value));
    }


    private loadItems(): void {
        this.control.options$?.subscribe((res: any) => {
            this.ddl.value = null;
            this.filteredItems = res;
        });
    }

}
