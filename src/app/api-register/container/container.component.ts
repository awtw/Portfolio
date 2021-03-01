import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { HierarchicalApiInfo, OwnerInfo } from '../api';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/btag-common/common.service';
import { GridOptions } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  imageUrl = './assets/images/btag-api/browser.png';
	filterImage = './assets/images/btag-api/filter1.png';
	imageSafeUrl: SafeUrl;
	filterImageSafeUrl: SafeUrl;
	apiList: HierarchicalApiInfo[];
	gridApi: any;
	gridColumnApi: any;
	editAble = false;
	selectList: HierarchicalApiInfo[];
	ownerList: OwnerInfo[];
	ownerListName: string[] = [];
	editType = 'fullRow';
	rowSelection = 'multiple';
	modalRef: BsModalRef;
	checkIfAD: boolean;
	checkIfCN = false;

	methodList: string[] = [];
	apiOutsideList: string[] = [];

	// grid
	rowData: HierarchicalApiInfo[];
	columnDefs: any[];

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

	};
	gridOptions: GridOptions = {
    localeText: this.commonService.internationalization(),
    paginationPageSize: 20
  };

  constructor(
    private commonService: CommonService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
		private modalService: BsModalService,
		private router: Router,
		private title: Title,
  ) {
    this.imageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl);
		this.filterImageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.filterImage);
		const urlLen = this.router.url.split('/').length;
		const env = this.router.url.split('/');
		env.forEach(data => {
			if (data === 'TW') {
				this.checkIfCN = false;
			}
			if (data === 'CN') {
				this.checkIfCN = true;
			}
		});
		this.methodList.push('POST');
		this.methodList.push('GET');
		this.methodList.push('PUT');
		this.apiOutsideList.push('內部');
		this.apiOutsideList.push('外部');
  }

  ngOnInit(): void {

  }

}
