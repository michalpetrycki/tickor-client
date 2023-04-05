import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Param } from 'src/app/Objects/params/Param';

@Component({
  selector: 'app-field-datepicker',
  templateUrl: './field-datepicker.component.html',
  styleUrls: ['./field-datepicker.component.scss']
})
export class FieldDatepickerComponent implements OnInit {

  @Input() param!: Param;
  @Input() formGroup!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
