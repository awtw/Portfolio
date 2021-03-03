import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'center',
    children: [
      {
        path: 'api-register',
        loadChildren: ()=> import('./api-register/api-register.module').then(m => m.ApiRegisterModule)
      },
      {
        path: 'project-manage',
        loadChildren: ()=> import('./project-manage/project-manage.module').then(m => m.ProjectManageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
