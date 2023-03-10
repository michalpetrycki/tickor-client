import { Component, Input, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() displayedColumns!: { field: string, headerText: string }[];
  @Input() items!: {}[];
  @Input() pageSettings!: PageSettingsModel;
  @Input() allowPaging!: boolean;
  @Input() allowSelection!: boolean;
  @Input() allowSorting!: boolean;

  constructor() { }

  ngOnInit(): void { }

}
