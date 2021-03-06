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
import { ToolToStringPipe } from './tool-to-string.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AboutMeComponent } from './about-me/about-me.component';
import { PaymeComponent } from './payme/payme.component';
import { PublicDiseaseComponent } from './public-disease/public-disease.component';


@NgModule({
  declarations: [
    ContainerComponent,
    LeftPanelComponent,
    RightPanelComponent,
    CenterContentComponent,
    EnumToStringPipe,
    RoleToStringPipe,
    ToolToStringPipe,
    AboutMeComponent,
    PaymeComponent,
    PublicDiseaseComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    InfoService
  ]
})
export class InfoModule { }
