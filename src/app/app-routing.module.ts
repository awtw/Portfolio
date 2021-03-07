import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    children: [
      {
        path: 'api-register',
        loadChildren: () => import('./api-register/api-register.module').then(m => m.ApiRegisterModule)
      },
      {
        path: 'project-manage',
        loadChildren: () => import('./project-manage/project-manage.module').then(m => m.ProjectManageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
      },
      {
        path: 'covid',
        loadChildren: () => import('./covid19/covid19.module').then(m => m.Covid19Module)
      },
      {
        path: 'test',
        loadChildren: () => import('./test-project/test-project.module').then(m => m.TestProjectModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'project/info'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true /** , enableTracing: true // debugging purposes only */ })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
