import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestProjectRoutingModule } from './test-project-routing.module';
import { ContainerComponent } from './container/container.component';
import { TestSService } from './test-s.service';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    TestProjectRoutingModule
  ],
  providers: [TestSService]
})
export class TestProjectModule { }
