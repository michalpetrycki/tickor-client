import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IssueListPageRoutingModule } from "src/app/issues/feature/issue-list/issue-list-routing.module";
import { IssueListPage } from "src/app/issues/feature/issue-list/issue-list.page";
import { IssueBuilderComponent } from "src/app/issues/ui/issue-builder/issue-builder.component";
import { SharedModule } from "src/app/modules/shared.module";

@NgModule({
    imports: [
        FormsModule,
        IssueListPageRoutingModule,
        SharedModule
    ],
    declarations: [
        IssueListPage,
        IssueBuilderComponent
    ]
})

export class IssueListPageModule { }