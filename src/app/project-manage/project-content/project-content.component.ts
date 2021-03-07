import { Casedetail, CaseDetailList } from './../project';
import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { GridOptions } from 'ag-grid-community';
import { BsModalRef } from 'ngx-bootstrap/modal';
// tslint:disable-next-line: max-line-length
import { CaseId, E327EventList, F301OutputInvoiceList, F309Output, F310OutputbuyInformationList, F326Output, F327OutputEventList, F328OutputCaseContent, InitialF328 } from '../of';
import { ProjectManageService } from '../project-manage.service';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { ButtonCellAlertComponent } from '../button-cell-alert/button-cell-alert.component';
import { ButtonCellNewMessageComponent } from '../button-cell-new-message/button-cell-new-message.component';
@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {
  // alert
  alerts: any[] = [];
  dismissible = true;
  canSee = false;
  setTimer = 30;
  private noRowsTemplate: any;
  modalRef: BsModalRef;
  imageUrl = 'assets/images/of-project/pdf.png';
  imageUrl2 = 'assets/images/of-project/image.png';
  imageUrlAdd = 'assets/images/of-project/plus.png';
  imageUrlBill = 'assets/images/of-project/bill.png';
  imageUrlSafeUrl: SafeUrl;
  imageUrlSafeUrl2: SafeUrl;
  imageArrowUrl = 'assets/images/of-project/left-arrow.png';
  imagDownload = 'assets/images/of-project/download.png';
  imageArrowSafeUrl: SafeUrl;
  imageUrlAddSafeUrl: SafeUrl;
  imageUrlBillSafeUrl: SafeUrl;
  imagDownloadSafeUrl: SafeUrl;
  imageUrlcheck = 'assets/images/of-project/check2.png';
  imageUrlSafeUrlcheck: SafeUrl;
  imageUrlhiden = 'assets/images/of-project/hidden.png';
  imageUrlSafeUrlhiden: SafeUrl;
  caseId = '';
  caseTypeName = '';

  Casedetail: Casedetail;


  date: Date;

  custContent = '';

  selectCaseId: CaseId = {
    caseId: ''
  };

  f309Output: F309Output = {
    fileList: [],
    totalPage: +'',
    page: +''
  };
  f301OutputInvoiceList: F301OutputInvoiceList = {
    totalPage: +'',
    page: +'',
    invoiceList: []
  };
  f310OutputbuyInformationList: F310OutputbuyInformationList;



  // checkIfAppShow
  checkIfAppShow: boolean;
  eventList: E327EventList[];

  // grid
  rowData: CaseDetailList[];
  columnDefs: any[];
  gridApi: any;
  gridColumnApi: any;
  srno: string;
  caseType: string;
  eventTypeList: F326Output;

  defaultColDef = {
    // flex: 1,
    // minWidth: 80,
    filter: true,
    sortable: true,
    resizable: true,
    autoHeight: true,
    autoWidth: true
  };
  autoGroupColumnDef = { Width: 100 };
  frameworkComponents = {
    ButtonCellAlertComponent,
    ButtonCellNewMessageComponent
  };

  gridOptions: GridOptions = {
  };

  constructor(private projectManageService: ProjectManageService) { }

  ngOnInit(): void {
    this.rowData = this.projectManageService.getCaseDetail();
    this.Casedetail = this.projectManageService.getCasedetail();
    this.caseTypeName = '裝潢';
    setTimeout(() => {
      this.setTimer += 50;
    }, 10);
    setTimeout(() => {
      this.canSee = true;
    }, 1000);

    // 事件列表
    this.columnDefs = [
      {
        headerName: 'APP顯示',
        field: 'appShow',
        cellRenderer: 'ButtonCellAlertComponent',
        width: 120,
        suppressSizeToFit: false,
        // checkboxSelection: true
      },
      {
        headerName: '訊息',
        field: 'newMessage',
        cellRenderer: 'ButtonCellNewMessageComponent',
        width: 120,
        suppressSizeToFit: false,
        // checkboxSelection: true
      },
      {
        headerName: '類型',
        field: 'eventName',
        width: 120,
        suppressSizeToFit: false,
        // checkboxSelection: true
      },
      {
        headerName: '事件名稱',
        field: 'title',
        width: 250,
        // suppressSizeToFit: false,
        // editable: true
      },
      {
        headerName: '最新會議日期',
        field: 'meetingBeginTime',
        columnGroupShow: 'open',
        // editable: true,
        width: 160,
      },
      {
        headerName: '最新訊息',
        field: 'messageContent',
        columnGroupShow: 'open',
        // editable: true,
        width: 250,
      },
      {
        headerName: '最新檔案',
        field: 'fileName',
        columnGroupShow: 'open',
        // editable: true,
        width: 200,
      },
    ];
  }

  addAlert(type: string, msg: string ): void {
    this.alerts.push({
      type,
      msg,
      timeout: 3500
    });
    }

    onClosed(dismissedAlert: AlertComponent): void {
      this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }

    editParticipant(value: string): void {

    }

    addNewEvent(): void {

    }

    onRowSelect(event: any): void {
      const selectedRows = this.gridApi.getSelectedRows();
    }

    onGridReady(params: any): void {
      this.gridApi = params.api;
      params.api.setRowData(this.rowData);
      this.gridColumnApi = params.columnApi;
      params.columnApi.autoSizeColumns();
      params.api.sizeColumnsToFit();
    }

}
