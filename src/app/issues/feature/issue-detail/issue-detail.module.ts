import { NgModule } from "@angular/core";
import { IssueDetailPageRoutingModule } from "src/app/issues/feature/issue-detail/issue-detail-routing.module";
import { IssueDetailPage } from "src/app/issues/feature/issue-detail/issue-detail.page";
import { MaterialModule } from "src/app/modules/material.module";
import { SharedModule } from "src/app/modules/shared.module";
import { ControlService } from "src/app/shared/utils/controls-service/controls.service";

@NgModule({
    imports: [
        IssueDetailPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        IssueDetailPage
    ],
    providers: [
        ControlService
    ]
})

export class IssueDetailPageModule { }