import { NgModule } from "@angular/core";
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DatePickerModule, DatePickerAllModule } from "@syncfusion/ej2-angular-calendars";
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';

@NgModule({
    exports: [
        ButtonModule,
        DatePickerModule,
        DatePickerAllModule,
        DialogModule,
        DropDownListModule,
        GridModule,
        NumericTextBoxModule,
        TabModule,
        TabAllModule,
        TextBoxModule,
        ToastModule,
        TooltipModule
    ]
})

export class SyncfusionModule { }