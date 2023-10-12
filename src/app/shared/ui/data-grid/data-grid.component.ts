import { Component, Input } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SelectEventArgs } from '@syncfusion/ej2-lists';

@Component({
    selector: 'app-data-grid',
    templateUrl: './data-grid.component.html',
    styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {

    @Input() displayedColumns!: { field: string, headerText: string }[];
    @Input() items!: {}[];
    @Input() pageSettings!: PageSettingsModel;
    @Input() allowPaging!: boolean;
    @Input() allowSelection!: boolean;
    @Input() allowSorting!: boolean;
    @Input() rowClick!: (selectedItemID: number) => void;

    constructor() { }

    public rowSelected(event: SelectEventArgs) {
        this.rowClick((event.data as any).id);
    }

}
