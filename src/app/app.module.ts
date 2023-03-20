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
    NgContentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SyncfusionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
