import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Param } from "src/app/Objects/params/Param";
import { ParamType } from "src/app/Objects/params/ParamType";
import { ClientService } from "src/app/Services/client/client.service";
import { ProjectService } from "src/app/Services/project/project.service";
import { ProjectResponse } from "src/app/projects/utils/ProjectResponse";
import { ControlService } from "src/app/shared/utils/controls-service/controls.service";
import { ControlBase } from "src/app/shared/utils/controls/control-base";
import { ParamHelperService } from "src/app/shared/utils/param/param.helper.service";

@Injectable({
    providedIn: 'root'
})
export class TopMenuParamHelperService {

    clientSubject = new ReplaySubject(1);

    constructor(
        private clientService: ClientService,
        private projectService: ProjectService
    ) { }

    getControls(fields: Object): ControlBase<any>[] {

        const client$ = this.clientService.list().pipe(map((res: any) => ParamHelperService.toDropdownOptions(res)));
        const project$ = this.clientSubject.pipe(switchMap((clientID: any) => { return this.projectService.list({ clientID }).pipe(map((res: ProjectResponse[]) => ParamHelperService.toDropdownOptions(res))) }));

        return [
            ControlService.createControl('Client', 'Select client', true, 1, 'dropdown', 'dropdown', undefined, client$, (clientID: number | string | boolean) => this.feedData(clientID), false, fields),
            ControlService.createControl('Project', 'Select project', true, 2, 'dropdown', 'dropdown', undefined, project$, undefined, false, fields)
        ];

    }

    getDropdownParams(fields: Object): Param[] {

        const client$ = this.clientService.list().pipe(map((res: any) => ParamHelperService.toDropdownOptions(res)));
        const project$ = this.clientSubject.pipe(switchMap((clientID: any) => { return this.projectService.list({ clientID }).pipe(map((res: ProjectResponse[]) => ParamHelperService.toDropdownOptions(res))) }));

        return [

            ParamHelperService.createParam('Client', true, ParamType.dropdown, 'Select client', client$, (clientID: number) => this.feedData(clientID), false, fields),
            ParamHelperService.createParam('Project', true, ParamType.dropdown, 'Select project', project$, undefined, false, fields)

        ]

    }

    private feedData(clientID: number | string | boolean): void {
        this.clientSubject.next(clientID);
    }

}
