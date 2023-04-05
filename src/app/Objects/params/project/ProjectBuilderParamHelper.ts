import { ProjectControls } from "src/app/Objects/controls/ProjectControls";
import { BuilderParamHelper } from "src/app/Objects/params/BuilderParamHelper";
import { ParamGroup } from "src/app/Objects/params/ParamGroup";
import { ParamType } from "src/app/Objects/params/ParamType";

export abstract class ProjectBuilderParamHelper extends BuilderParamHelper {

    static createParamGroups(): ParamGroup[] {
        return [
            {
                name: 'Project details', params: [
                    BuilderParamHelper.createParam(ProjectControls.name, true, ParamType.string, 'Name of the project'),
                    BuilderParamHelper.createParam(ProjectControls.client, true, ParamType.dropdown, 'Client this project belongs to'),
                    BuilderParamHelper.createParam(ProjectControls.initialStartDate, true, ParamType.date, 'Initial date when the project starts'),
                    BuilderParamHelper.createParam(ProjectControls.initialEndDate, true, ParamType.date, 'Initial date when the project ends')
                ]
            },
            {
                name: 'Client details', params: [
                    BuilderParamHelper.createParam('Client field 1', true, ParamType.string, 'Client tooltip 1'),
                    BuilderParamHelper.createParam('Client field 2', true, ParamType.date, 'Client tooltip 2'),
                    BuilderParamHelper.createParam('Client field 3', true, ParamType.dropdown, 'Client tooltip 3')
                ]
            },
            {
                name: 'Member details', params: [
                    BuilderParamHelper.createParam('Member field 1', true, ParamType.email, 'Member tooltip 1'),
                    BuilderParamHelper.createParam('Member field 2', true, ParamType.password, 'Member tooltip 2'),
                    BuilderParamHelper.createParam('Member field 3', true, ParamType.number, 'Member tooltip 3')
                ]
            }
        ];
    }

}
