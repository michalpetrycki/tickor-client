import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Injectable()
export class ControlService {
    toFormGroup(controls: ControlBase<string>[]) {
        const group: any = {};

        controls.forEach(control => {
            group[control.key] = control.required ?
                new FormControl(control.value || '', Validators.required)
                : new FormControl(control.value || '');
        });
        return new FormGroup(group);
    }
}
