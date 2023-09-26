import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { IssueService } from 'src/app/issues/data-access/issue-service/issue.service';
// import { IssueBuilderComponent } from 'src/app/issues/ui/issue-builder/issue-builder.component';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';
import { IssueControlsService } from 'src/app/issues/data-access/issue-controls/issue-controls.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Component({
    selector: 'app-issue-list',
    templateUrl: './issue-list.page.html',
    styleUrls: ['./issue-list.page.scss']
})
export class IssueListPage implements OnInit {

    displayedColumns: { field: string, headerText: string }[] = [];
    pageSettings: PageSettingsModel = {
        pageSize: 6
    };
    allowPaging = true;
    allowSelection = true;
    allowSorting = true;
    selectedClient: IssueResponse | undefined;

    entityTypeName = 'Issue';
    // builderComponent = IssueBuilderComponent;

    currentIssues: any[];

    selection: any;

    issues$: Observable<IssueResponse[]>

    title!: string;
    message!: string;

    public controls$!: Observable<ControlBase<string>[] | null>;

    constructor(
        private router: Router,
        private issueService: IssueService,
        private issueControlService: IssueControlsService
    ) {
        this.displayedColumns = [];
        this.currentIssues = [];

        this.selection = this.router.getCurrentNavigation()?.extras?.state?.selection;

        this.issues$ = this.issueService.list();
        this.controls$ = this.issueControlService.getControls();

        this.title = 'Add an issue';
        this.message = 'Wanna add new issue?';

    }

    ngOnInit(): void {

    }

    createNewIssue(a: any): void { }

}
