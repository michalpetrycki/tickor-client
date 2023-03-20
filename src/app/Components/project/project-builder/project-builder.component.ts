import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns/src';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { TabComponent, SelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectCreateProperties, ProjectCreateRequest } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';
import { ProjectControls } from 'src/app/Objects/controls/ProjectControls';
import { ParamGroup } from 'src/app/Objects/params/ParamGroup';
import { ProjectBuilderParamHelper } from 'src/app/Objects/params/project/ProjectBuilderParamHelper';
import { ClientService } from 'src/app/Services/client/client.service';
import { ProjectService } from 'src/app/Services/project/project.service';

@Component({
  selector: 'app-project-builder',
  templateUrl: './project-builder.component.html',
  styleUrls: ['./project-builder.component.scss']
})
export class ProjectBuilderComponent implements OnInit {

  @ViewChild('tab') tab!: TabComponent;
  @ViewChild('dialog') dialog!: DialogComponent;

  public today: Date = new Date();
  public dateMin!: Date;
  public dateMax!: Date;
  public headerText: Object[] = [];

  public animationSettings: Object = { effect: 'None' };
  public header = 'New Project';

  private selectedTabIndex = 0;

  public creationParamGroups!: ParamGroup[];
  public creationForm!: FormGroup;

  public clients: ClientResponse[];
  public filteredClients: ClientResponse[];
  public fields: Object;

  constructor(private projectService: ProjectService, private clientService: ClientService) {
    this.creationForm = new FormGroup({});
    this.clients = [];
    this.filteredClients = [];
    this.fields = { text: 'name', value: 'id' };
  }

  ngOnInit(): void {

    this.dateMin = new Date(this.today.getTime());
    this.dateMax = new Date(this.today.getTime() + 60 * 24 * 60 * 60 * 1000);

    this.clientService.list().toPromise()
      .then((clients: ClientResponse[]) => {
        this.clients = clients;
        this.filteredClients = clients;
      });

    this.creationParamGroups = ProjectBuilderParamHelper.createParamGroups();
    for (let group of this.creationParamGroups) {
      for (let param of group.params) {
        this.creationForm.addControl(param.name, new FormControl());
      }
    }

  }

  openBuilder() {
    this.dialog.show();
  }

  dialogClose(): void {
    alert('close');
  }

  create(): void {

    const projectCreateProperties: ProjectCreateProperties = {
      name: this.creationForm.controls[ProjectControls.name]?.value,
      active: true,
      clientID: 1,
      initialStartDate: this.creationForm.controls[ProjectControls.initialStartDate]?.value,
      initialEndDate: this.creationForm.controls[ProjectControls.initialEndDate]?.value
    };
    this.projectService.create(projectCreateProperties).toPromise().then((newProject: ProjectResponse) => {
      debugger;
    })
      .catch((error: any) => {
        debugger;
      });

  }

  public dlgButtons: Object[] = [{
    click: this.dlgBtnClick.bind(this),
    buttonModel: { content: 'OK', isPrimary: 'true' }
  },
  {
    click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Cancel' }
  }];

  dlgBtnClick() {
    this.dialog.hide();
  }

  public tabSelected(e: any): void {
    if (e.isSwiped) {
      e.cancel = true;
    }
  }

  public showNextTab(): void {
    this.selectedTabIndex = this.tab.selectedItem + 1;
    this.tab.enableTab(this.selectedTabIndex, true);
    this.tab.select(this.selectedTabIndex);
  }

  public showPreviousTab(): void {
    this.selectedTabIndex = this.tab.selectedItem - 1;
    this.tab.enableTab(this.selectedTabIndex, true);
    this.tab.select(this.selectedTabIndex);
  }

  public disableNextBtn(): boolean {
    return this.selectedTabIndex === this.creationParamGroups.length - 1;
  }

  public disablePrevBtn(): boolean {
    return this.selectedTabIndex === 0;
  }

  public disableCreateBtn(): boolean {
    return !(this.selectedTabIndex === this.creationParamGroups.length - 1);
  }

  public onFiltering(e: FilteringEventArgs): void {
    this.filteredClients = this.clients.filter((client: ClientResponse) => client.name.toLowerCase().startsWith(e.text));
  }

  public repopulateDropdown() {
    this.filteredClients = this.clients;
  }

}
