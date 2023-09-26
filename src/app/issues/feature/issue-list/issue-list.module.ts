import { NgModule } from "@angular/core";
import { IssueControlsService } from "src/app/issues/data-access/issue-controls/issue-controls.service";
import { IssueListPageRoutingModule } from "src/app/issues/feature/issue-list/issue-list-routing.module";
import { IssueListPage } from "src/app/issues/feature/issue-list/issue-list.page";
// import { IssueBuilderComponent } from "src/app/issues/ui/issue-builder/issue-builder.component";
import { MaterialModule } from "src/app/modules/material.module";
import { SharedModule } from "src/app/modules/shared.module";
import { ControlService } from "src/app/shared/utils/controls-service/controls.service";

@NgModule({
    imports: [
        IssueListPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        IssueListPage,
        // IssueBuilderComponent
    ],
    providers: [IssueControlsService, ControlService]
})

export class IssueListPageModule { }