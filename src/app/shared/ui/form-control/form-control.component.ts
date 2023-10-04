import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';


@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {

    @Input() control!: ControlBase<string>;
    @Input() formGroup!: FormGroup;

    ngOnInit() { }

    get isValid(): boolean {
        return !(this.formGroup.controls[this.control.key]?.touched && !this.formGroup.controls[this.control.key]?.valid);
    }

    select(e: any) {
        debugger;
    }

}