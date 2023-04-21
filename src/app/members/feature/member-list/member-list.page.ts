import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MemberBuilderComponent } from 'src/app/Components/member/member-builder/member-builder.component';
import { PaginatedRequest } from 'src/app/Objects/API/PaginatedRequest';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { MemberCreateProperties } from 'src/app/Objects/API/member/MemberCreateRequest';
import { MemberResponse } from 'src/app/Objects/API/member/MemberResponse';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { MemberService } from 'src/app/Services/member/member.service';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.page.html',
    styleUrls: ['./member-list.page.scss']
})
export class MemberListPage implements OnInit {

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
        // this.memeberService.create(newMemberProperties)
        //     .pipe()

        // this.memeberService.create(newMemberProperties).toPromise()
        //     .catch((error: Error) => { })
        //     .then((newMember: MemberResponse) => {
        //         alert('OK');
        //     })
        //     .catch((error: any) => {
        //         alert('Error');
        //     })
        //     .finally(() => {
        //         this.builderService.closeDialog();
        //         this.changePagination();
        //     });
    }

    changePagination(): void {
        this.memeberService.list()
            .pipe(
                map((res: MemberResponse[]) => {
                    this.currentMembers = res;
                }),
                catchError((err, caught) => {
                    return EMPTY;
                })
            )
    }

}
