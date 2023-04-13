import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MemberListPageRoutingModule } from "src/app/members/feature/member-list/member-list-routing.module";
import { MemberListPage } from "src/app/members/feature/member-list/member-list.page";
import { SharedModule } from "src/app/modules/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MemberListPageRoutingModule,
        SharedModule
    ],
    declarations: [
        MemberListPage
    ]
})

export class MemberListPageModule { }