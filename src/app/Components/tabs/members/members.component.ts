import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MemberResponse } from 'src/app/Objects/API/member/MemberResponse';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { MemberService } from 'src/app/Services/member/member.service';
import { MemberCreateProperties } from 'src/app/Objects/API/member/MemberCreateRequest';
import { MemberBuilderComponent } from 'src/app/Components/member/member-builder/member-builder.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  displayedColumns: { field: string, headerText: string }[] = [];
  currentMembers!: MemberResponse[];
  pageSettings: PageSettingsModel = {
    pageSize: 6
  };
  allowPaging = true;
  allowSelection = true;
  allowSorting = true;
  selectedClient: MemberResponse | undefined;

  entityTypeName = 'Member';
  builderComponent = MemberBuilderComponent;

  constructor(private memeberService: MemberService,
    private builderService: BuilderService<MemberCreateProperties>) {
    // this.selectedClient = ClientService.selectedClient;
  }

  ngOnInit(): void {
    this.changePagination();
  }

  createNewMember(newMemberProperties: MemberCreateProperties): void {
      this.memeberService.create(newMemberProperties).toPromise()
        .then((newMember: MemberResponse) => {
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
    this.memeberService.list().toPromise()
      .then((members: MemberResponse[]) => {
        this.currentMembers = members;
      });
  }

}
