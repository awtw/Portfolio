import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ApiRegisterRoutingModule } from './api-register-routing.module';
import { ContainerComponent } from './container/container.component';
import { CommonService } from '../btag-common/common.service';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    ToastrModule.forRoot(),
		ModalModule.forRoot(),
		TooltipModule.forRoot(),
    CommonModule,
    ApiRegisterRoutingModule
  ],
  providers: [
    CommonService
  ],
  entryComponents: [

  ]
})
export class ApiRegisterModule { }
