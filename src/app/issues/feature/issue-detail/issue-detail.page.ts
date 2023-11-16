import { BehaviorSubject, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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
import { ToastService } from 'src/app/shared/utils/toast-service/toast.service';
import { ActivityResponse } from 'src/app/shared/utils/response/activity.response';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-issue-detail',
    templateUrl: './issue-detail.page.html',
    styleUrls: ['./issue-detail.page.scss'],
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class IssueDetailPage {

    public sortingDesc = true;
    public isNameEditing = false;
    public issue?: IssueResponse;
    public detailsFormGroup!: FormGroup;
    public activityFormGroup!: FormGroup;
    public detailsControls!: ControlBase<string>[];
    public activityControls!: ControlBase<string>[];
    public displayRte$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    @ViewChildren('rte') rte!: QueryList<RichTextEditor>;

    public issue$: BehaviorSubject<IssueResponse | undefined>;

    constructor(
        private qcs: ControlService,
        private route: ActivatedRoute,
        private issueService: IssueService,
        private toastService: ToastService,
        private issueControlsService: IssueControlsService
    ) {
        // this.issueControlsService.getActivityControls().subscribe((controls: ControlBase<string>[]) => {
        //     this.activityControls = controls;
        //     this.activityFormGroup = this.qcs.toFormGroup(controls);
        // });

        this.issue$ = new BehaviorSubject<IssueResponse | undefined>(undefined);

        this.loadIssue();


        this.activityFormGroup = new FormGroup({
            details: new FormControl('', Validators.required)
        });

    }

    loadIssue(): void {

        this.route.paramMap.pipe(
            switchMap((params) => {

                return this.issueService.getById({ id: Number(params.get('id')) }).pipe((map((result: IssueResponse | undefined) => {
                    result?.activity.sort((a, b) => {
                        console.log('halo');
                        const aDate = new Date(a.activityDate);
                        const bDate = new Date(b.activityDate);
                        return aDate.getTime() - bDate.getTime();
                    })
                    return result;
                })))

            }
            ),
            tap((issue: IssueResponse | undefined) => {
                this.issue = issue;
                this.issueControlsService.getDetailControls().subscribe((controls: ControlBase<string>[]) => {
                    this.detailsControls = controls;
                    this.detailsFormGroup = this.qcs.toFormGroup(controls, issue);
                });
            })
        ).subscribe((issue: IssueResponse | undefined) => {
            this.issue$.next(issue);
        });

    }

    updateIssue(updateProperties: IssueUpdateProperties): void {

        this.issueService.update(updateProperties)
            .pipe(
                tap((issue) => {
                    this.toastService.showToast({ title: 'Edit issue', content: 'Issue successfully updated', success: true });
                    // this.issue$ = of(issue);
                }),
                catchError(err => {
                    this.toastService.showToast({ title: 'Edit issue', content: 'Failure', success: false, errors: err.error.errs });
                    return of(this.issue);
                })
            )
            .subscribe((issue: IssueResponse | undefined) => this.issue$.next(issue));

    }

    showRte(): void {

        this.displayRte$.next(true);

        // this.displayRte = true;
        setTimeout(() => {
            this.rte.first.focusIn();
        }, 1);
    }

    cancel(): void {
        this.displayRte$.next(false);
        // this.displayRte = false;
    }

    saveDetails(): void {
        debugger;
    }

    trackActivity(index: number, activity: ActivityResponse) {
        return activity.id;
    }

    copyLink(activity: ActivityResponse): void {
        const link = `${environment.apiUrl}issue/${this.issue?.id}/activityId=${activity.id}`;
        alert(link);
    }

    editActivity(activity: ActivityResponse): void {
        this.displayRte$.next(true);
        setTimeout(() => {
            this.rte.first.focusIn();
            // debugger;
            this.rte.first.value = activity.activityDetails || '';
        }, 1);
        // this.updateIssue(activity, true);
    }

    deleteActivity(activity: ActivityResponse): void {

        const updateProperties: IssueUpdateProperties = {
            id: this.issue!.id,
            statusID: this.issue!.statusID,
            subject: this.issue!.subject,
            name: '',
            categoryID: this.issue!.categoryID,
            projectID: this.issue!.projectID,
            activity: this.issue!.activity.filter((activity: ActivityResponse) => activity.id !== activity.id)
        };

        this.updateIssue(updateProperties);

    }

    toggleSort(): void {

        this.sortingDesc = !this.sortingDesc;

        this.route.paramMap.pipe(
            switchMap((params) => {

                return this.issueService.getById({ id: Number(params.get('id')) }).pipe((map((result: IssueResponse | undefined) => {
                    result?.activity.sort((a, b) => {
                        const aDate = new Date(a.activityDate);
                        const bDate = new Date(b.activityDate);
                        return this.sortingDesc ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
                    })
                    return result;
                })))

            }
            ),
            tap((issue: IssueResponse | undefined) => {
                this.issue = issue;
                this.issueControlsService.getDetailControls().subscribe((controls: ControlBase<string>[]) => {
                    this.detailsControls = controls;
                    this.detailsFormGroup = this.qcs.toFormGroup(controls, issue);
                });
            })
        ).subscribe((issue: IssueResponse | undefined) => {
            this.issue$.next(issue);
        });

    }

    closeNameEditingTextbox(save: boolean): void {

        this.isNameEditing = false;

        if (save) {

            const updateProperties: IssueUpdateProperties = {
                id: this.issue!.id,
                statusID: this.issue!.statusID,
                subject: this.issue!.subject,
                name: '',
                categoryID: this.issue!.categoryID,
                projectID: this.issue!.projectID,
                activity: this.issue!.activity
            };

            this.updateIssue(updateProperties);

        }

    }

    addActivity(): void {

        const newActivity: ActivityCreateProperties = {
            activityDetails: this.activityFormGroup.get('details')?.value,
            activityDate: new Date().toISOString(),
            updated: null,
            activityType: 'update_issue',
            authorID: 1
            // activityType: null
        };

        this.issueService.addActivity(this.issue!.id, newActivity)
            .pipe(
                tap((issue) => {
                    this.toastService.showToast({ title: 'Edit issue', content: 'Issue successfully updated', success: true });
                    // this.issue$ = of(issue);
                }),
                catchError(err => {
                    this.toastService.showToast({ title: 'Edit issue', content: 'Failure', success: false, errors: err.error.errs });
                    return of(this.issue);
                })
            )
            .subscribe((issue: IssueResponse | undefined) => this.issue$.next(issue));

    }

}
