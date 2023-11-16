import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgContentComponent } from './Components/ng-content/ng-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from 'src/app/home/feature/home-page/home.module';
import { SharedModule } from 'src/app/modules/shared.module';
import { ActivityDatePipe } from './shared/utils/pipes/activity-date/activity-date.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NgContentComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HomePageModule,
        SharedModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
