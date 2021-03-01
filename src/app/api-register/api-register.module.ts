import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ApiRegisterRoutingModule } from './api-register-routing.module';
import { ContainerComponent } from './container/container.component';
import { CommonService } from '../btag-common/common.service';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ApiRegisterService } from './api-register.service';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    ToastrModule.forRoot(),
		ModalModule.forRoot(),
		TooltipModule.forRoot(),
    CommonModule,
    FormsModule,
		AgGridModule.withComponents(),
		ReactiveFormsModule,
    ApiRegisterRoutingModule
  ],
  providers: [
    CommonService, ApiRegisterService
  ],
  entryComponents: [

  ]
})
export class ApiRegisterModule { }