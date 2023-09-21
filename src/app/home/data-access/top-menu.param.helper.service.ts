import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { map, switchMap, tap } from "rxjs/operators";
import { DropdownOption } from "src/app/Objects/params/DropdownOption";
import { Param } from "src/app/Objects/params/Param";
import { ParamType } from "src/app/Objects/params/ParamType";
import { ClientService } from "src/app/Services/client/client.service";
import { ProjectService } from "src/app/Services/project/project.service";
import { ProjectResponse } from "src/app/projects/utils/ProjectResponse";
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

    getDropdownParams(fields: Object): Param[] {

        const client$ = this.clientService.list().pipe(map((res: any) => ParamHelperService.toDropdownOptions(res)));
        const project$ = this.clientSubject.pipe(switchMap((clientID: any) => { return this.projectService.list({ clientID }).pipe(map((res: ProjectResponse[]) => ParamHelperService.toDropdownOptions(res))) }));

        return [

            ParamHelperService.createParam('Client', true, ParamType.dropdown, 'Select client', client$, (clientID: number) => this.feedData(clientID), false, fields),
            ParamHelperService.createParam('Project', true, ParamType.dropdown, 'Select project', project$, undefined, false, fields)

        ]

    }

    private feedData(clientID: number): void {
        this.clientSubject.next(clientID);
    }

}
