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
    readonly?: boolean;
    fields?: Object;
    options$: Observable<DropdownOption[]> | undefined;
    onValueChanges?: (selection: number | string | boolean) => void;

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        readonly?: boolean;
        fields?: Object;
        options$?: Observable<DropdownOption[]>;
        onValueChanges?: (selection: number | string | boolean) => void;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.readonly = options.readonly;
        this.fields = options.fields;
        this.options$ = options.options$ || of([]);
        this.onValueChanges = options.onValueChanges;
    }

}
