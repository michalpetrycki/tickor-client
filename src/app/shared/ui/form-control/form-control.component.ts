import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';


@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html'
})
export class FormControlComponent {
    @Input() control!: ControlBase<string>;
    @Input() form!: FormGroup;
    
    get isValid() { return this.form.controls[this.control.key].valid; }
}