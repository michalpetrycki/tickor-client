import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { IssueService } from 'src/app/issues/data-access/issue-service/issue.service';
import { IssueControlsService } from 'src/app/issues/data-access/issue-controls/issue-controls.service';
import { IssueCreateProperties } from 'src/app/issues/utils/IssueCreateRequest';
import { ToastService } from 'src/app/shared/utils/toast-service/toast.service';

@Component({
    selector: 'app-issue-list',
    templateUrl: './issue-list.page.html',
    styleUrls: ['./issue-list.page.scss']
})
export class IssueListPage {

    displayedColumns: { field: string, headerText: string }[] = [];
    pageSettings: PageSettingsModel = {
        pageSize: 6
    };
    allowPaging = true;
    allowSelection = true;
    allowSorting = true;
    selectedClient: IssueResponse | undefined;

    entityTypeName!: IssueCreateProperties;
    currentIssues: any[];
    selection: any;
    issues$: Observable<IssueResponse[]>
    title!: string;
    message!: string;

    public controls$!: Observable<ControlBase<string>[] | null>;

    constructor(
        private router: Router,
        private issueService: IssueService,
        private issueControlService: IssueControlsService,
        private toastService: ToastService
    ) {
        this.displayedColumns = [];
        this.currentIssues = [];

        this.selection = this.router.getCurrentNavigation()?.extras?.state?.selection;

        this.issues$ = this.issueService.list();
        this.controls$ = this.issueControlService.getControls();

        this.title = 'Add an issue';
        this.message = 'Wanna add new issue?';

    }

    createNewIssue(properties: IssueCreateProperties): void {

        this.toastService.showToast({ title: 'Create issue', content: 'Issue created successfully' });

        // this.issueService.create(properties).subscribe((newIssue: IssueResponse) => {

        // },
        //     (error: any) => {

        //     });

    }

}
