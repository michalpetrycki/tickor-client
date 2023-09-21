import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IssueBuilderComponent } from 'src/app/issues/ui/issue-builder/issue-builder.component';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';

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
    builderComponent = IssueBuilderComponent;

    currentIssues: any[];

    constructor() {
        this.displayedColumns = [];
        this.currentIssues = [];
    }

    ngOnInit(): void {

    }

    createNewIssue(a: any): void { }

}
