import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ApiRegisterRoutingModule } from './api-register-routing.module';
import { CommonService } from '../btag-common/common.service';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ApiRegisterService } from './api-register.service';
import { ContainerComponent } from './container/container.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EditHeaderComponent } from './edit-header/edit-header.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CellDeleteComponent } from './cell-delete/cell-delete.component';
import { CellRenderComponent } from './cell-render/cell-render.component';
import { CellRenderWordComponent } from './cell-render-word/cell-render-word.component';


@NgModule({
  declarations: [
    ContainerComponent,
    AddNewComponent,
    EditComponentComponent,
    EditHeaderComponent,
    CellDeleteComponent,
    CellRenderComponent,
    CellRenderWordComponent
  ],
  imports: [
    ToastrModule.forRoot(),
		ModalModule.forRoot(),
		TooltipModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,
    FormsModule,
		AgGridModule.withComponents([CellDeleteComponent, CellRenderComponent, CellRenderWordComponent]),
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
