import { Param } from "src/app/Objects/params/Param";
import { ParamGroup } from "src/app/Objects/params/ParamGroup";
import { ParamType } from "src/app/Objects/params/ParamType";

export abstract class BuilderParamHelper {
    
    abstract createParamGroups(): ParamGroup[];

    static createParam(name: string, required: boolean, label: string, type: ParamType, tooltip: string): Param {
        return {
            name,
            required,
            label,
            type,
            tooltip
        };
    }
}
