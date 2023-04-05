import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Param } from 'src/app/Objects/params/Param';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent implements OnInit {

  @Input() param!: Param;
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
