import { NgModule } from "@angular/core";
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule, DatePickerAllModule } from "@syncfusion/ej2-angular-calendars";
import { ToastModule } from "@syncfusion/ej2-angular-notifications";

@NgModule({
    exports: [
        TabModule,
        GridModule,
        ToastModule,
        TabAllModule,
        ButtonModule,
        DialogModule,
        TextBoxModule,
        TooltipModule,
        DatePickerModule,
        DropDownListModule,
        DatePickerAllModule,
        NumericTextBoxModule
    ]
})

export class SyncfusionModule { }