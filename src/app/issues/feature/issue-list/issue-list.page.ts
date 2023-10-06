import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { IssueService } from 'src/app/issues/data-access/issue-service/issue.service';
import { IssueControlsService } from 'src/app/issues/data-access/issue-controls/issue-controls.service';
import { IssueCreateProperties } from 'src/app/issues/utils/IssueCreateRequest';
import { ToastService } from 'src/app/shared/utils/toast-service/toast.service';
import { AddEntityButtonComponent } from 'src/app/shared/ui/add-entity-button/add-entity-button.component';

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

    @ViewChild(AddEntityButtonComponent) addIssueButton?: AddEntityButtonComponent<IssueCreateProperties>;

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

        this.issueService.create(properties).subscribe((newIssue: IssueResponse) => {
            this.toastService.showToast({ title: 'Create issue', content: `Issue ${newIssue.name} created successfully`, success: true });
            this.issues$ = this.issueService.list();
        },
            (error: any) => {
                this.toastService.showToast({ title: 'Create issue', content: 'Failure', success: false, errors: error.error.errs });
                this.toastService.retrySubject.subscribe(() => {
                    this.addIssueButton?.buttonClicked();
                });
            });

    }

}
