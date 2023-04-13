import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../issue-list/issue-list.module').then(
                (m) => m.IssueListPageModule
            ),
    },
    {
        path: ':id',
        loadChildren: () =>
            import('../issue-detail/issue-detail.module').then(
                (m) => m.IssueDetailPageModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IssueShellRoutingModule { }