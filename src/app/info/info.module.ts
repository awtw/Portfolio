import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { ContainerComponent } from './container/container.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CenterContentComponent } from './center-content/center-content.component';


@NgModule({
  declarations: [ContainerComponent, LeftPanelComponent, RightPanelComponent, CenterContentComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
