import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProjectBuilderComponent } from 'src/app/Components/project/project-builder/project-builder.component';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectCreateProperties } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { ClientService } from 'src/app/Services/client/client.service';
import { ProjectService } from 'src/app/Services/project/project.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.page.html',
    styleUrls: ['./project-list.page.scss']
})
export class ProjectListPage implements OnInit {

    displayedColumns: { field: string, headerText: string }[] = [];
    currentProjects!: ProjectResponse[];
    pageSettings: PageSettingsModel = {
        pageSize: 6
    };
    allowPaging = true;
    allowSelection = true;
    allowSorting = true;
    selectedClient: ClientResponse | undefined;

    entityTypeName = 'Project';
    builderComponent = ProjectBuilderComponent;

    constructor(private projectService: ProjectService,
        private builderService: BuilderService<ProjectCreateProperties>) {
        this.selectedClient = ClientService.selectedClient;
    }

    ngOnInit(): void {
        this.changePagination();
    }

    createNewProject(newProjectProperties: ProjectCreateProperties): void {
        this.projectService.create(newProjectProperties).toPromise()
            .then((newProject: ProjectResponse) => {
                alert('OK');
            })
            .catch((error: any) => {
                alert('Error');
            })
            .finally(() => {
                this.builderService.closeDialog();
                this.changePagination();
            });
    }

    changePagination(): void {
        this.projectService.list({ clientID: this.selectedClient?.id })
            .pipe(
                map((res: ProjectResponse[]) => {
                    this.currentProjects = res;
                }),
                catchError((err, caught) => {
                    return EMPTY;
                })
            )
    }

}
