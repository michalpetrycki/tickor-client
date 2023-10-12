import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssueListPage } from './issue-list.page';

const routes: Routes = [
    {
        path: '',
        component: IssueListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IssueListPageRoutingModule { }