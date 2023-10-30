import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Component({
    selector: 'app-field-input',
    templateUrl: './field-input.component.html',
    styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent {

    @Input() control!: ControlBase<string>;
    @Input() formGroup!: FormGroup;

    constructor() { 
    }

}
