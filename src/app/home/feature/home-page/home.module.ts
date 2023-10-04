import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { TopMenuParamHelperService } from 'src/app/home/data-access/top-menu.param.helper.service';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomePageRoutingModule,
        SharedModule
    ],
    providers: [TopMenuParamHelperService]
})
export class HomePageModule { }