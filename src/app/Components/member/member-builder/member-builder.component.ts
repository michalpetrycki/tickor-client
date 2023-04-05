import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { MemberCreateProperties } from 'src/app/Objects/API/member/MemberCreateRequest';
import { ProjectCreateProperties } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectControls } from 'src/app/Objects/controls/ProjectControls';
import { ParamGroup } from 'src/app/Objects/params/ParamGroup';
import { MemberBuilderParamHelper } from 'src/app/Objects/params/member/MemberBuilderParamHelper';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { MemberControls } from 'src/app/Objects/controls/MemberControls';

@Component({
  selector: 'app-member-builder',
  templateUrl: './member-builder.component.html',
  styleUrls: ['./member-builder.component.scss']
})
export class MemberBuilderComponent implements OnInit {

  @ViewChild('tab') tab!: TabComponent;
  @ViewChild('dialog') dialog!: DialogComponent;

  public headerText: Object[] = [];
  public animationSettings: Object = { effect: 'None' };
  public header = 'New member';
  public creationParamGroups!: ParamGroup[];
  public creationForm!: FormGroup;
  private selectedTabIndex = 0;

  constructor(private builderService: BuilderService<MemberCreateProperties>) {
    this.creationForm = new FormGroup({});
  }

  ngOnInit(): void {

    this.creationParamGroups = MemberBuilderParamHelper.createParamGroups();
    for (let group of this.creationParamGroups) {
      for (let param of group.params) {
        this.creationForm.addControl(param.name, new FormControl());
      }
    }

  }

  create(): void {

    const memberCreateProperties: MemberCreateProperties = {
      username: this.creationForm.controls[MemberControls.username]?.value,
      email: this.creationForm.controls[MemberControls.email]?.value,
      kind: this.creationForm.controls[MemberControls.kind]?.value
    };

    this.builderService.emitNewEntityProperties(memberCreateProperties);

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

}
