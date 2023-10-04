import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddEntityButtonComponent } from "src/app/shared/ui/add-entity-button/add-entity-button.component";
import { BuilderDialogComponent } from "src/app/shared/ui/builder-dialog/builder-dialog.component";
import { DataGridComponent } from "src/app/shared/ui/data-grid/data-grid.component";
import { MaterialModule } from "src/app/modules/material.module";
import { SyncfusionModule } from "src/app/modules/syncfusion.module";
import { FormControlComponent } from "src/app/shared/ui/form-control/form-control.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FieldDropdownComponent } from "src/app/Components/fields/field-dropdown/field-dropdown.component";
import { HttpClientModule } from "@angular/common/http";
import { FieldDatepickerComponent } from "src/app/Components/fields/field-datepicker/field-datepicker.component";
import { FieldInputComponent } from "src/app/Components/fields/field-input/field-input.component";
import { HeaderComponent } from "src/app/home/ui/header/header.component";
import { TabMenuComponent } from "src/app/home/ui/tab-menu/tab-menu.component";
import { QuickSearchComponent } from "src/app/Components/quick-search/quick-search.component";
import { RouterModule } from "@angular/router";
import { TopMenuComponent } from "src/app/home/ui/top-menu/top-menu.component";
import { ToastNotificationComponent } from 'src/app/shared/utils/toast-notification/toast-notification.component';

@NgModule({
    declarations: [
        DataGridComponent,
        AddEntityButtonComponent,
        BuilderDialogComponent,
        FieldDropdownComponent,
        FormControlComponent,
        FieldInputComponent,
        FieldDatepickerComponent,
        HeaderComponent,
        TopMenuComponent,
        TabMenuComponent,
        QuickSearchComponent,
        ToastNotificationComponent
    ],
    exports: [
        DataGridComponent,
        AddEntityButtonComponent,
        BuilderDialogComponent,
        FieldDropdownComponent,
        FormControlComponent,
        FieldInputComponent,
        FieldDatepickerComponent,
        CommonModule,
        ReactiveFormsModule,
        TabMenuComponent,
        QuickSearchComponent,
        HeaderComponent,
        TopMenuComponent,
        ToastNotificationComponent
    ],
    imports: [
        CommonModule,
        SyncfusionModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ]
})

export class SharedModule { }