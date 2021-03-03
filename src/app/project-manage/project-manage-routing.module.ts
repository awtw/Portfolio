import { ProjectContentComponent } from './project-content/project-content.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent
      },
      {
        path: 'page',
        component: ProjectContentComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManageRoutingModule { }
