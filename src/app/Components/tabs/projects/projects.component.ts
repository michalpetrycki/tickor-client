import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ProjectBuilderComponent } from 'src/app/Components/project/project-builder/project-builder.component';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectCreateProperties } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';
import { ToastData } from 'src/app/Objects/interfaces/ToastData';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { ClientService } from 'src/app/Services/client/client.service';
import { ProjectService } from 'src/app/Services/project/project.service';
import { ToastService } from 'src/app/Services/toast/toast.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
    private toastService: ToastService,
    private builderService: BuilderService<ProjectCreateProperties>) {
    this.selectedClient = ClientService.selectedClient;
  }

  ngOnInit(): void {
    this.changePagination();
  }

  openToast(success: boolean, error?: string): void {

    const message = success ? 'New project successfully created' : `Failure during creation of new project. Reason: ${error}`;
    const data: ToastData = {
      message,
      success
    };
    this.toastService.openToast(data);

  }

  createNewProject(newProjectProperties: ProjectCreateProperties): void {
    this.projectService.create(newProjectProperties).toPromise()
      .then((newProject: ProjectResponse) => {
        this.openToast(true);
      })
      .catch((error: any) => {
        this.openToast(false, error);
      })
      .finally(() => {
        this.builderService.closeDialog();
        this.changePagination();
      });
  }

  changePagination(): void {
    this.projectService.list({ clientID: this.selectedClient?.id }).toPromise()
      .then((projects: ProjectResponse[]) => {
        this.currentProjects = projects;
      });
  }

}
