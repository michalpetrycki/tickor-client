import { MemberControls } from "src/app/Objects/controls/MemberControls";
import { BuilderParamHelper } from "src/app/Objects/params/BuilderParamHelper";
import { ParamGroup } from "src/app/Objects/params/ParamGroup";
import { ParamType } from "src/app/Objects/params/ParamType";

export abstract class MemberBuilderParamHelper extends BuilderParamHelper {

    static createParamGroups(): ParamGroup[] {
        return [
            {
                name: 'Member details', params: [
                    BuilderParamHelper.createParam(MemberControls.username, true, ParamType.string, 'Username used by this user.'),
                    BuilderParamHelper.createParam(MemberControls.email, true, ParamType.string, 'Email used by this user.'),
                    BuilderParamHelper.createParam(MemberControls.kind, true, ParamType.string, 'What kind the user is of.'),
                ]
            }
        ];
    }

}
