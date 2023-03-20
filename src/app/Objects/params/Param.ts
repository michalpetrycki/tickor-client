import { DropdownOption } from "src/app/Objects/params/DropdownOption";
import { ParamType } from "src/app/Objects/params/ParamType";

export interface Param {
    name: string;
    required: boolean;
    type: ParamType;
    values?: DropdownOption;
    readOnly?: boolean;
    label: string;
    tooltip: string;
}
