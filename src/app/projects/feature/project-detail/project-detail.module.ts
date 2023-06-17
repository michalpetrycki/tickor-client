import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IssueListPageModule } from "src/app/issues/feature/issue-list/issue-list.module";
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
        SyncfusionModule,
        IssueListPageModule
    ],
    declarations: [
        ProjectDetailPage
    ]
})

export class ProjectDetailPageModule { }