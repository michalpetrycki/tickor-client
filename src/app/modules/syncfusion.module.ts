import { NgModule } from "@angular/core";
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
    exports: [
        ButtonModule,
        DropDownListModule,
        NumericTextBoxModule,
        TabModule,
        TextBoxModule
    ]
})

export class SyncfusionModule { }