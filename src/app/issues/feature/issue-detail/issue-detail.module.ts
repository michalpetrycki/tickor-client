import { NgModule } from "@angular/core";
import { IssueDetailPageRoutingModule } from "src/app/issues/feature/issue-detail/issue-detail-routing.module";
import { IssueDetailPage } from "src/app/issues/feature/issue-detail/issue-detail.page";
import { MaterialModule } from "src/app/modules/material.module";
import { SharedModule } from "src/app/modules/shared.module";

@NgModule({
    imports: [
        IssueDetailPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        IssueDetailPage
    ]
})

export class IssueDetailPageModule { }