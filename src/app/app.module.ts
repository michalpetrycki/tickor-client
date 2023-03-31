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
import { ToastPopupComponent } from './Components/toast/toast.component';
import { AddEntityButtonComponent } from './Components/add-entity-button/add-entity-button.component';
import { BuilderDialogComponent } from './Components/builder-dialog/builder-dialog.component';
import { InputComponent } from './Components/fields/input/input.component';
import { DateComponent } from './Components/fields/date/date.component';
import { DropdownComponent } from './Components/fields/dropdown/dropdown.component';

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
    ToastPopupComponent,
    AddEntityButtonComponent,
    BuilderDialogComponent,
    InputComponent,
    DateComponent,
    DropdownComponent
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
