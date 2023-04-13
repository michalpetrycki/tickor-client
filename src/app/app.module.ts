import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Syncfusion components
import { SyncfusionModule } from 'src/app/modules/syncfusion.module';
import { HeaderComponent } from './Components/header/header.component';
import { ContentComponent } from './Components/content/content.component';
import { TopMenuComponent } from './Components/top-menu/top-menu.component';
import { QuickSearchComponent } from './Components/quick-search/quick-search.component';
import { TabMenuComponent } from './Components/tab-menu/tab-menu.component';
import { IssuesComponent } from './Components/tabs/issues/issues.component';
import { NgContentComponent } from './Components/ng-content/ng-content.component';
import { FieldInputComponent } from './Components/fields/field-input/field-input.component';
import { FieldDropdownComponent } from './Components/fields/field-dropdown/field-dropdown.component';
import { FieldDatepickerComponent } from './Components/fields/field-datepicker/field-datepicker.component';
import { MemberBuilderComponent } from './Components/member/member-builder/member-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TopMenuComponent,
    QuickSearchComponent,
    TabMenuComponent,
    IssuesComponent,
    NgContentComponent,
    FieldInputComponent,
    FieldDropdownComponent,
    FieldDatepickerComponent,
    MemberBuilderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SyncfusionModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
