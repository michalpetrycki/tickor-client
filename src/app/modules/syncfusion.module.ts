import { NgModule } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DatePickerModule, DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule, NumericTextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';

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
        UploaderModule,
        DatePickerModule,
        DropDownListModule,
        DatePickerAllModule,
        NumericTextBoxModule,
        RichTextEditorAllModule
    ]
})

export class SyncfusionModule { }