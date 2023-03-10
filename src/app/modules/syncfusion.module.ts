import { NgModule } from "@angular/core";
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
    exports: [
        ButtonModule,
        DropDownListModule,
        GridModule,
        NumericTextBoxModule,
        TabModule,
        TextBoxModule
    ]
})

export class SyncfusionModule { }