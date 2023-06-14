import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddEntityButtonComponent } from "src/app/Components/add-entity-button/add-entity-button.component";
import { BuilderDialogComponent } from "src/app/Components/builder-dialog/builder-dialog.component";
import { DataGridComponent } from "src/app/Components/data-grid/data-grid.component";
import { MaterialModule } from "src/app/modules/material.module";
import { SyncfusionModule } from "src/app/modules/syncfusion.module";


@NgModule({
    declarations: [
        DataGridComponent,
        AddEntityButtonComponent,
        BuilderDialogComponent
    ],
    exports: [
        DataGridComponent,
        AddEntityButtonComponent,
        BuilderDialogComponent,
        CommonModule
    ],
    imports: [
        CommonModule,
        SyncfusionModule,
        MaterialModule
    ]
})

export class SharedModule { }