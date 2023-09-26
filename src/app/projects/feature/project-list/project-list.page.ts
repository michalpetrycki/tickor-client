import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClientService } from 'src/app/Services/client/client.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { ProjectResponse } from 'src/app/projects/utils/ProjectResponse';
import { ProjectService } from 'src/app/Services/project/project.service';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';
import { ProjectBuilderComponent } from 'src/app/projects/ui/project-builder/project-builder.component';
import { ProjectControlsService } from 'src/app/projects/data-access/project-controls/project-controls.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.page.html',
    styleUrls: ['./project-list.page.scss'],
    providers: [ControlService]
})
export class ProjectListPage implements OnInit {

    public project$!: Observable<ProjectResponse[]>;
    public projectError$!: Observable<Error[]>;
    public controls$!: Observable<ControlBase<string>[] | null>;

    displayedColumns: { field: string, headerText: string }[] = [];
    pageSettings: PageSettingsModel = {
        pageSize: 6
    };
    allowPaging = true;
    allowSelection = true;
    allowSorting = true;
    selectedClient: ClientResponse | undefined;

    entityTypeName = 'Project';
    builderComponent = ProjectBuilderComponent;

    constructor(
        private projectService: ProjectService,
        private projectControlService: ProjectControlsService
    ) {
        this.selectedClient = ClientService.selectedClient;
    }

    ngOnInit(): void {
        this.project$ = this.projectService.list().pipe(delay(1000));
        this.controls$ = this.projectControlService.getControls();
    }

    createNewProject(event: any): void { }

    removeProject(projectID: number): void {
        this.projectService.delete({ id: projectID }).subscribe((success: Object) => {

        });
    }

}
