import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/feature/project-shell/project-shell.module').then(
                (m) => m.ProjectShellModule
            )
    },
    {
        path: 'members',
        loadChildren: () =>
            import('./members/feature/member-shell/member-shell.module').then(
                (m) => m.MemberShellModule
            )
    },
    {
        path: 'issues',
        loadChildren: () =>
            import('./issues/feature/issue-shell/issue-shell.module').then(
                (m) => m.IssueShellModule
            )
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
