
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManageRoutingModule } from './project-manage-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { CommonService } from '../btag-common/common.service';
import { ProjectManageService } from './project-manage.service';
import { ContainerComponent } from './container/container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { EventContentComponent } from './event-content/event-content.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { AddNewEventComponent } from './add-new-event/add-new-event.component';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    ContainerComponent,
    ProjectListComponent,
    ProjectContentComponent,
    SearchPageComponent,
    EventContentComponent,
    EditProjectComponent,
    EditParticipantComponent,
    AddNewProjectComponent,
    AddNewEventComponent],
  imports: [
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
		ModalModule.forRoot(),
		ToastrModule.forRoot(),
		TooltipModule.forRoot(),
		TypeaheadModule.forRoot(),
		BsDatepickerModule.forRoot(),
		ProgressbarModule.forRoot(),
		AccordionModule.forRoot(),
		AlertModule.forRoot(),
    AgGridModule.withComponents(),
    FormsModule,
		ReactiveFormsModule,
    CommonModule,
    ProjectManageRoutingModule
  ],
  providers:[
    CommonService, ProjectManageService
  ]
})
export class ProjectManageModule { }
