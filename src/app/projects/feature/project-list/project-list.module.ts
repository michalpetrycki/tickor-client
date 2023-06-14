import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/modules/shared.module";
import { ProjectControlsService } from "src/app/projects/data-access/project-controls-service/project-controls.service";
import { ProjectListPageRoutingModule } from "src/app/projects/feature/project-list/project-list-routing.module";
import { ProjectListPage } from "src/app/projects/feature/project-list/project-list.page";
import { ProjectBuilderComponent } from "src/app/projects/ui/project-builder/project-builder.component";
import { FormControlComponent } from "src/app/shared/ui/form-control/form-control.component";
import { ProjectCardComponent } from "src/app/projects/ui/project-card/project-card.component";
import { MaterialModule } from "src/app/modules/material.module";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ProjectListPageRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        ProjectListPage,
        ProjectBuilderComponent,
        FormControlComponent,
        ProjectCardComponent
    ],
    providers: [ProjectControlsService]
})

export class ProjectListPageModule { }