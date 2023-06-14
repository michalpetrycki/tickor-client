import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IssueListPage } from "src/app/issues/feature/issue-list/issue-list.page";
import { MaterialModule } from "src/app/modules/material.module";
import { SyncfusionModule } from "src/app/modules/syncfusion.module";
import { ProjectDetailPage } from "src/app/projects/feature/project-detail/project-detail.page";
import { ProjectDetailPageRoutingModule } from "src/app/projects/feature/project-detail/project-detail.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ProjectDetailPageRoutingModule,
        SyncfusionModule
    ],
    declarations: [
        ProjectDetailPage,
        IssueListPage
    ]
})

export class ProjectDetailPageModule { }