import { NgModule } from "@angular/core";
import { IssueDetailPageRoutingModule } from "src/app/issues/feature/issue-detail/issue-detail-routing.module";
import { IssueDetailPage } from "src/app/issues/feature/issue-detail/issue-detail.page";
import { MaterialModule } from "src/app/modules/material.module";
import { SharedModule } from "src/app/modules/shared.module";
import { ControlService } from "src/app/shared/utils/controls-service/controls.service";
import { ActivityDatePipe } from "src/app/shared/utils/pipes/activity-date/activity-date.pipe";
import { ActivityTypePipe } from "src/app/shared/utils/pipes/activity-type/activity-type.pipe";

@NgModule({
    imports: [
        IssueDetailPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        IssueDetailPage,
        ActivityTypePipe,
        ActivityDatePipe
    ],
    providers: [
        ControlService,
        ActivityTypePipe,
        ActivityDatePipe
    ]
})

export class IssueDetailPageModule { }