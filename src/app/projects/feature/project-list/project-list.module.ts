import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/modules/shared.module";
import { ProjectListPageRoutingModule } from "src/app/projects/feature/project-list/project-list-routing.module";
import { ProjectListPage } from "src/app/projects/feature/project-list/project-list.page";
import { ProjectBuilderComponent } from "src/app/projects/ui/project-builder/project-builder.component";
import { ProjectCardComponent } from "src/app/projects/ui/project-card/project-card.component";
import { MaterialModule } from "src/app/modules/material.module";
import { ProjectControlsService } from "src/app/projects/data-access/project-controls/project-controls.service";

@NgModule({
    imports: [
        ProjectListPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        ProjectListPage,
        ProjectBuilderComponent,
        ProjectCardComponent
    ],
    providers: [ProjectControlsService]
})

export class ProjectListPageModule { }