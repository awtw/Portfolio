import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Covid19RoutingModule } from './covid19-routing.module';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    Covid19RoutingModule
  ]
})
export class Covid19Module { }
