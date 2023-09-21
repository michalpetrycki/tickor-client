import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Syncfusion components
import { SyncfusionModule } from 'src/app/modules/syncfusion.module';
import { HeaderComponent } from './home/ui/header/header.component';
import { TopMenuComponent } from './home/ui/top-menu/top-menu.component';
import { QuickSearchComponent } from './Components/quick-search/quick-search.component';
import { TabMenuComponent } from './home/ui/tab-menu/tab-menu.component';
import { IssuesComponent } from './Components/tabs/issues/issues.component';
import { NgContentComponent } from './Components/ng-content/ng-content.component';
import { FieldInputComponent } from './Components/fields/field-input/field-input.component';
import { FieldDropdownComponent } from './Components/fields/field-dropdown/field-dropdown.component';
import { FieldDatepickerComponent } from './Components/fields/field-datepicker/field-datepicker.component';
import { MemberBuilderComponent } from './Components/member/member-builder/member-builder.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './shared/ui/confirmation-dialog/confirmation-dialog.component';
import { TopMenuParamHelperService } from 'src/app/home/data-access/top-menu.param.helper.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    QuickSearchComponent,
    TabMenuComponent,
    IssuesComponent,
    NgContentComponent,
    FieldInputComponent,
    FieldDropdownComponent,
    FieldDatepickerComponent,
    MemberBuilderComponent,
    ConfirmationDialogComponent,
    // ProjectCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SyncfusionModule,
    MaterialModule
  ],
  entryComponents: [],
  providers: [
    TopMenuParamHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
