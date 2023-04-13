import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../member-list/member-list.module').then(
                (m) => m.MemberListPageModule
            ),
    },
    {
        path: ':id',
        loadChildren: () =>
            import('../member-detail/member-detail.module').then(
                (m) => m.MemberDetailPageModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MemberShellRoutingModule { }