import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Param } from 'src/app/Objects/params/Param';

@Component({
  selector: 'app-field-param',
  templateUrl: './field-param.component.html',
  styleUrls: ['./field-param.component.scss']
})
export class FieldParamComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() param!: Param;

  constructor() { }

  ngOnInit(): void {
  }

}
