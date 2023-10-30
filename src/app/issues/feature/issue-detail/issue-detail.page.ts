import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { IssueUpdateProperties } from 'src/app/issues/utils/IssueEditRequest';
import { IssueService } from 'src/app/issues/data-access/issue-service/issue.service';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';
import { ActivityCreateProperties } from 'src/app/shared/utils/response/activity-create.properties';
import { IssueControlsService } from 'src/app/issues/data-access/issue-controls/issue-controls.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditor } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-issue-detail',
    templateUrl: './issue-detail.page.html',
    styleUrls: ['./issue-detail.page.scss'],
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class IssueDetailPage {

    public issue?: IssueResponse;
    public detailsFormGroup!: FormGroup;
    public activityFormGroup!: FormGroup;
    public detailsControls!: ControlBase<string>[];
    public activityControls!: ControlBase<string>[];
    public displayRte$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    @ViewChildren('rte') rte!: QueryList<RichTextEditor>;

    public issue$ = this.route.paramMap.pipe(
        switchMap((params) =>
            this.issueService.getById({ id: Number(params.get('id')) })
        ),
        tap((issue: IssueResponse | undefined) => {
            this.issue = issue;
            this.issueControlsService.getDetailControls().subscribe((controls: ControlBase<string>[]) => {
                this.detailsControls = controls;
                this.detailsFormGroup = this.qcs.toFormGroup(controls, issue);
            });
        })
    );

    constructor(
        private qcs: ControlService,
        private route: ActivatedRoute,
        private issueService: IssueService,
        private issueControlsService: IssueControlsService
    ) {
        // this.issueControlsService.getActivityControls().subscribe((controls: ControlBase<string>[]) => {
        //     this.activityControls = controls;
        //     this.activityFormGroup = this.qcs.toFormGroup(controls);
        // });

        this.activityFormGroup = new FormGroup({
            details: new FormControl('', Validators.required)
        });

    }


    updateIssue(): void {

        if (this.issue) {

            const updateProperties: IssueUpdateProperties = {
                id: this.issue?.id,
                statusID: this.issue.statusID,
                subject: this.issue.subject,
                name: this.issue.name,
                categoryID: this.issue.categoryID,
                activity: this.issue.activity
            };

            const newActivity: ActivityCreateProperties = {
                issueID: this.issue.id,
                activityDetails: this.activityFormGroup.get('details')?.value
            };

            updateProperties.activity.push(newActivity);
            this.issueService.update(updateProperties).subscribe((issue: IssueResponse | undefined) => {
                this.issue = issue;
            });

        }

    }

    showRte(): void {

        this.displayRte$.next(true);

        // this.displayRte = true;
        setTimeout(() => {
            this.rte.first.focusIn();
        }, 300);
    }

    cancel(): void {
        this.displayRte$.next(false);
        // this.displayRte = false;
    }

    saveDetails(): void {
        debugger;
    }

}
