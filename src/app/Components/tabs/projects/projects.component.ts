import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';
import { ClientService } from 'src/app/Services/client/client.service';
import { ProjectService } from 'src/app/Services/project/project.service';

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

  constructor(private projectService: ProjectService) {
    this.selectedClient = ClientService.selectedClient;
  }

  ngOnInit(): void {
    // this.projectService.list({ clientID: this.selectedClient?.id }).toPromise()
    //   .then((projects: ProjectResponse[]) => {
    //     this.currentProjects = projects;
    //   });
  }

}
