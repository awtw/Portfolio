import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { ContainerComponent } from './container/container.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { InfoService } from './info.service';
import { EnumToStringPipe } from './enum-to-string.pipe';
import { RoleToStringPipe } from './role-to-string.pipe';


@NgModule({
  declarations: [ContainerComponent, LeftPanelComponent, RightPanelComponent, CenterContentComponent, EnumToStringPipe, RoleToStringPipe],
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  providers: [
    InfoService
  ]
})
export class InfoModule { }
