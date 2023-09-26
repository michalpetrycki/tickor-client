import { Observable, of } from "rxjs";
import { DropdownOption } from "src/app/Objects/params/DropdownOption";

export class ControlBase<T> {

    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: Observable<DropdownOption[]>;

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: Observable<DropdownOption[]>;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || of([]);
    }

}
