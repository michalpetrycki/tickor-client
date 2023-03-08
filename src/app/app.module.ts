import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SyncfusionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
