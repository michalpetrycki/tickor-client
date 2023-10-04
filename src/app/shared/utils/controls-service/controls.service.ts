import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DropdownOption } from 'src/app/Objects/params/DropdownOption';
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

    static createControl(
        key: string, label: string, required: boolean, order: number, controlType: string, type: string, value?: any,
        options$?: Observable<DropdownOption[]>, onValueChanges?: (selection: number | string | boolean) => void, readonly?: boolean, fields?: Object): ControlBase<any> {

        return {
            key,
            label,
            required,
            order,
            controlType,
            type,
            readonly,
            fields,
            value,
            options$,
            onValueChanges
        };
    }

}
