import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';
import { ToastData } from 'src/app/Objects/interfaces/ToastData';
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

  constructor(private projectService: ProjectService, private toastService: ToastService) {
    this.selectedClient = ClientService.selectedClient;
  }

  ngOnInit(): void {
    // this.projectService.list({ clientID: this.selectedClient?.id }).toPromise()
    //   .then((projects: ProjectResponse[]) => {
    //     this.currentProjects = projects;
    //   });
  }

  openToast(): void {
    const data: ToastData = {
      message: 'Cos tam created',
      success: true
    };
    this.toastService.openToast(data);
  }

}
