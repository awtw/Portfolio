import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'center',
    children: [
      {
        path: 'api-register',
        loadChildren: ()=> import('./api-register/api-register.module').then(m => m.ApiRegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
