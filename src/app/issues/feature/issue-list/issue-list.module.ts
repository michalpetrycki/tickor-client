import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/modules/shared.module";
import { MaterialModule } from "src/app/modules/material.module";
import { IssueListPage } from "src/app/issues/feature/issue-list/issue-list.page";
import { ControlService } from "src/app/shared/utils/controls-service/controls.service";
import { IssueControlsService } from "src/app/issues/data-access/issue-controls/issue-controls.service";
import { IssueListPageRoutingModule } from "src/app/issues/feature/issue-list/issue-list-routing.module";

@NgModule({
    imports: [
        IssueListPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        IssueListPage
    ],
    providers: [IssueControlsService, ControlService]
})

export class IssueListPageModule { }