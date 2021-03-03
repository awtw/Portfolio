import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { GridOptions } from 'ag-grid-community';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CaseId, E327EventList, F301OutputInvoiceList, F309Output, F310OutputbuyInformationList, F326Output, F327OutputEventList, F328OutputCaseContent, InitialF328 } from '../of';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {
  canSee = false;
	setTimer = 30;
	private noRowsTemplate: any;
	modalRef: BsModalRef;
	imageUrl = './assets/images/of-project/pdf.png';
	imageUrl2 = './assets/images/of-project/image.png';
	imageUrlAdd = './assets/images/of-project/plus.png';
	imageUrlBill = './assets/images/of-project/bill.png';
	imageUrlSafeUrl: SafeUrl;
	imageUrlSafeUrl2: SafeUrl;
	imageArrowUrl = './assets/images/of-project/left-arrow.png';
	imagDownload = './assets/images/of-project/download.png';
	imageArrowSafeUrl: SafeUrl;
	imageUrlAddSafeUrl: SafeUrl;
	imageUrlBillSafeUrl: SafeUrl;
	imagDownloadSafeUrl: SafeUrl;
	imageUrlcheck = './assets/images/of-project/check2.png';
	imageUrlSafeUrlcheck: SafeUrl;
	imageUrlhiden = './assets/images/of-project/hidden.png';
	imageUrlSafeUrlhiden: SafeUrl;
  caseId = '';
	caseTypeName = '';

  projectContentEdit: F328OutputCaseContent = InitialF328;
	f327OutputEventList: F327OutputEventList;

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

	//alert
	dismissible = true;

	// checkIfAppShow
	checkIfAppShow: boolean;
	eventList: E327EventList[];

	// grid
	rowData: E327EventList[];
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
		// ButtonCellRenderComponent,
		// ButtonCellAlertComponent,
		// ButtonCellNewMessageComponent
	};

	gridOptions: GridOptions = {
	};

  constructor() { }

  ngOnInit(): void {
  }

}
