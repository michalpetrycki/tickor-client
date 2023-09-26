import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddEntityButtonComponent } from "src/app/shared/ui/add-entity-button/add-entity-button.component";
import { BuilderDialogComponent } from "src/app/shared/ui/builder-dialog/builder-dialog.component";
import { DataGridComponent } from "src/app/shared/ui/data-grid/data-grid.component";
import { MaterialModule } from "src/app/modules/material.module";
import { SyncfusionModule } from "src/app/modules/syncfusion.module";
import { FormControlComponent } from "src/app/shared/ui/form-control/form-control.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        DataGridComponent,
        AddEntityButtonComponent,
        BuilderDialogComponent,
        FormControlComponent
    ],
    exports: [
        DataGridComponent,
        AddEntityButtonComponent,
        BuilderDialogComponent,
        FormControlComponent,
        CommonModule,
        ReactiveFormsModule
    ],
    imports: [
        CommonModule,
        SyncfusionModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }