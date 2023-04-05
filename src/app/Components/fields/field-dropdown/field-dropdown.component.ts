import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { Param } from 'src/app/Objects/params/Param';

@Component({
  selector: 'app-field-dropdown',
  templateUrl: './field-dropdown.component.html',
  styleUrls: ['./field-dropdown.component.scss']
})
export class FieldDropdownComponent implements OnInit {

  @Input() param!: Param;
  @Input() formGroup!: FormGroup;
  @Input() fields!: Object;
  filteredItems: any;

  constructor() {
    this.filteredItems = this.param?.values || [];
   }

  ngOnInit(): void {
  }

  public onFiltering(e: FilteringEventArgs): void {
    // this.filteredItems = this.param.values!.filter((item: any) => item.value.toLowerCase().startsWith(e.text));
  }

  public repopulateDropdown() {
    // this.filteredItems = this.param.values;
  }

}
