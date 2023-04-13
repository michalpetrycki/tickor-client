import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/modules/shared.module";
import { ProjectListPageRoutingModule } from "src/app/projects/feature/project-list/project-list-routing.module";
import { ProjectListPage } from "src/app/projects/feature/project-list/project-list.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProjectListPageRoutingModule,
        SharedModule
    ],
    declarations: [
        ProjectListPage
    ]
})

export class ProjectListPageModule { }