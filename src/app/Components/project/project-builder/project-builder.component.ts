import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns/src';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ProjectCreateProperties } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectControls } from 'src/app/Objects/controls/ProjectControls';
import { ToastData } from 'src/app/Objects/interfaces/ToastData';
import { ParamGroup } from 'src/app/Objects/params/ParamGroup';
import { ProjectBuilderParamHelper } from 'src/app/Objects/params/project/ProjectBuilderParamHelper';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { ClientService } from 'src/app/Services/client/client.service';
import { ToastService } from 'src/app/Services/toast/toast.service';

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

  constructor(private builderService: BuilderService<ProjectCreateProperties>,
    private clientService: ClientService,
    private toastService: ToastService) {

    this.creationForm = new FormGroup({});
    this.clients = [];
    this.filteredClients = [];
    this.fields = { text: 'name', value: 'id' };

  }

  ngOnInit(): void {

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

  create(): void {

    const projectCreateProperties: ProjectCreateProperties = {
      name: this.creationForm.controls[ProjectControls.name]?.value,
      active: true,
      clientID: 1,
      initialStartDate: this.creationForm.controls[ProjectControls.initialStartDate]?.value,
      initialEndDate: this.creationForm.controls[ProjectControls.initialEndDate]?.value
    };

    this.builderService.emitNewEntityProperties(projectCreateProperties);

  }

  public dlgButtons: Object[] = [
    {
      click: this.dlgBtnClick.bind(this),
      buttonModel: { content: 'OK', isPrimary: 'true' }
    },
    {
      click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Cancel' }
    }
  ];

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
