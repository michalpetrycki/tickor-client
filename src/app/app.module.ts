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
import { ProjectsComponent } from './Components/tabs/projects/projects.component';
import { MembersComponent } from './Components/tabs/members/members.component';
import { IssuesComponent } from './Components/tabs/issues/issues.component';
import { DataGridComponent } from './Components/data-grid/data-grid.component';
import { ProjectBuilderComponent } from './Components/project/project-builder/project-builder.component';
import { NgContentComponent } from './Components/ng-content/ng-content.component';
import { AddEntityButtonComponent } from './Components/add-entity-button/add-entity-button.component';
import { BuilderDialogComponent } from './Components/builder-dialog/builder-dialog.component';
import { FieldInputComponent } from './Components/fields/field-input/field-input.component';
import { FieldDropdownComponent } from './Components/fields/field-dropdown/field-dropdown.component';
import { FieldDatepickerComponent } from './Components/fields/field-datepicker/field-datepicker.component';
import { FieldParamComponent } from './Components/fields/field-param/field-param.component';
import { MemberBuilderComponent } from './Components/member/member-builder/member-builder.component';
import { ProjectDetailComponent } from './projects/feature/project-detail/project-detail.component';
import { ProjectListPage } from './projects/feature/project-list/project-list.page';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TopMenuComponent,
    QuickSearchComponent,
    TabMenuComponent,
    ProjectsComponent,
    MembersComponent,
    IssuesComponent,
    DataGridComponent,
    ProjectBuilderComponent,
    NgContentComponent,
    AddEntityButtonComponent,
    BuilderDialogComponent,
    FieldInputComponent,
    FieldDropdownComponent,
    FieldDatepickerComponent,
    FieldParamComponent,
    MemberBuilderComponent,
    ProjectDetailComponent,
    ProjectListPage
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SyncfusionModule
  ],
  entryComponents: [
    ProjectBuilderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
