import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectCreateProperties } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { ClientService } from 'src/app/Services/client/client.service';
import { ProjectService } from 'src/app/Services/project/project.service';
import { ProjectControlsService } from 'src/app/projects/data-access/project-controls-service/project-controls.service';
import { ProjectBuilderComponent } from 'src/app/projects/ui/project-builder/project-builder.component';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { delay, tap } from 'rxjs/operators';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.page.html',
    styleUrls: ['./project-list.page.scss'],
    providers: [ControlService]
})
export class ProjectListPage implements OnInit {

    public project$!: Observable<ProjectResponse[]>;
    public projectError$!: Observable<Error[]>;

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

    constructor(private projectService: ProjectService) {
        this.selectedClient = ClientService.selectedClient;
    }

    ngOnInit(): void {
        this.project$ = this.projectService.list().pipe(delay(1000));
    }

    createNewProject(event: any): void { }

    removeProject(projectID: number): void {
        this.projectService.delete({ id: projectID }).subscribe((success: Object) => {
            
        });
    }

}
