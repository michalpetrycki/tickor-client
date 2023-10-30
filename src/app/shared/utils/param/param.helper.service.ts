import { Observable } from "rxjs";
import { DropdownOption } from "src/app/Objects/params/DropdownOption";
import { Param } from "src/app/Objects/params/Param";
import { ParamType } from "src/app/Objects/params/ParamType";

export class ParamHelperService {

    public static createParam(name: string, required: boolean, type: ParamType, tooltip: string, values$?: Observable<DropdownOption[]>, onValueChanges?: (selection: number) => void, readOnly?: boolean, fields?: Object, value?: any): Param {
        return {
            name,
            required,
            type,
            tooltip,
            values$,
            onValueChanges,
            readOnly,
            fields,
            value
        };
    }

    public static toDropdownOptions(res: any): DropdownOption[] {
        return res.map((x: any) => <DropdownOption>{ value: x.id, displayString: x.name });
    }

}
