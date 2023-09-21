import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TopMenuParamHelperService } from 'src/app/home/data-access/top-menu.param.helper.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomePageRoutingModule
    ],
    declarations: [
        HomePage
    ],
    providers: [TopMenuParamHelperService]
})
export class HomePageModule { }