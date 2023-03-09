import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from 'src/app/Components/tabs/issues/issues.component';
import { MembersComponent } from 'src/app/Components/tabs/members/members.component';
import { ProjectsComponent } from 'src/app/Components/tabs/projects/projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'issues', component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
