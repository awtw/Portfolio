import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { CheckCn, DeleteApi, HierarchicalApiInfo, OwnerInfo, UpdateApiInfo } from '../api';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/btag-common/common.service';
import { GridOptions } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRegisterService } from '../api-register.service';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { EditHeaderComponent } from '../edit-header/edit-header.component';
import { AddNewComponent } from '../add-new/add-new.component';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { CellDeleteComponent } from '../cell-delete/cell-delete.component';
import { CellRenderComponent } from '../cell-render/cell-render.component';
import { CellRenderWordComponent } from '../cell-render-word/cell-render-word.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  iconImage = '../assets/images/api-register/verify.png';
  infoImage = '../assets/images/api-register/info.png';
  gotoImage = '../assets/images/api-register/go-to-location.png';


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
		filter: true,
		sortable: true,
		resizable: true,
		autoHeight: true,
		autoWidth: true
	};
	autoGroupColumnDef = { Width: 100 };
	frameworkComponents = {
    CellDeleteComponent,
    CellRenderComponent,
    CellRenderWordComponent
	};
	gridOptions: GridOptions = {
		localeText: this.commonService.internationalization(),
		paginationPageSize: 20,
	};

  constructor(
    private commonService: CommonService,
    private apiRegisterService: ApiRegisterService,
    private toastr: ToastrService,
		private modalService: BsModalService,
		 private router: Router,
    private activatedRoute: ActivatedRoute,
		private title: Title  )
  {
      this.methodList.push('POST');
      this.methodList.push('GET');
      this.methodList.push('PUT');
      this.apiOutsideList.push('內部');
      this.apiOutsideList.push('外部');
  }

  ngOnInit(): void {
    this.title.setTitle('API register');
    this.getData();
  }


  notify() {
    this.addAlert(
      'warning',
      '使用教學' ,
      '註冊資料交換即集團內部所用的API， <br> 擁有者指的是API的維護單位或為廠商 <br> 若要添加資料交換的驗證訊息 (Header 或 QueryString) 請直接點選按鈕添加',
      true,
      2000);
	}

  goHome(){
    this.router.navigate(['../../info'], { relativeTo: this.activatedRoute });
  }

  getData() {
		const checkCnInsert: CheckCn = {
			checkIfCN: this.checkIfCN
		};
		const apiListRequest = this.apiRegisterService.GetAPiInfoListRequest(checkCnInsert);
    const temp2: string[] = [];
    const temp = this.apiRegisterService.GetOwnerListRequest(checkCnInsert)
    temp.forEach(data => {
      temp2.push(data.OWNER_NAME);
    });
    // this.gridOptions.api.showLoadingOverlay();
    apiListRequest.forEach(x => {
      x._ownerToken = x.OwnerInfo.OWNER_TOKEN;
      x._ownerName = x.OwnerInfo.OWNER_NAME;
      x.checkIfCN = this.checkIfCN;
      // x._OwnerIsInternal = x.OwnerInfo.OwnerIsInternal;
      if (x.ApiIsEnable === 'Y') {
        x.ApiIsEnable = '啟用';
      }
      if (x.ApiIsEnable === 'N') {
        x.ApiIsEnable = '不啟用';
      }
      if (x.OwnerInfo.OwnerIsInternal === 'Y') {
        x._OwnerIsInternal = '內部';
      }
      if (x.OwnerInfo.OwnerIsInternal === 'N') {
        x._OwnerIsInternal = '外部';
      }
      x.ApiQueryStringInfo.forEach(data2 => {
        if (data2.ApiQueryKeyRequired.trim() !== '') {
          data2.Mandatory = true;
        } else {
          data2.Mandatory = false;
        }
      });
      x.ApiHeaderInfo.forEach(data2 => {
        if (data2.ApiHeaderKeyRequired.trim() !== '') {
          data2.Mandatory = true;
        } else {
          data2.Mandatory = false;
        }
      });
    });
    this.apiList = apiListRequest;
    this.rowData = apiListRequest;
    console.log(apiListRequest);

    this.columnDefs = [
      {
        headerName: 'API 基本資訊',
        children: [
          {
            headerName: 'API名稱',
            field: 'API_NAME',
            suppressSizeToFit: true,
            editable: true,
            // checkboxSelection: true
            filterParams: {
              buttons: ['reset', 'apply'],
              debounceMs: 200
            }
          },
          {
            headerName: 'URL',
            field: 'API_URL',
            width: 550,
            columnGroupShow: 'open',
            suppressSizeToFit: true,
            editable: true,
            filterParams: {
              buttons: ['reset', 'apply'],
              debounceMs: 200
            }
          },
          {
            headerName: '啟用狀態',
            field: 'ApiIsEnable',
            suppressSizeToFit: true,
            columnGroupShow: 'open',
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
              cellHeight: 50,
              values: ['啟用', '不啟用'],
            },
            filterParams: {
              buttons: ['reset', 'apply'],
              debounceMs: 200
            }
          },
          {
            headerName: 'API Token',
            suppressSizeToFit: true,
            field: 'API_TOKEN',
            // columnGroupShow: 'open',
            width: 140,
            editable: true,
            cellRenderer: 'CellRenderComponent',
            cellRendererParams: {
              clicked: (field: any) => {
                this.copyToClipboard(field.API_TOKEN);
              }
            },
          },
          {
            headerName: 'Owner Token',
            width: 140,
            suppressSizeToFit: true,
            field: '_ownerToken',
            // columnGroupShow: 'open',
            editable: true,
            cellRenderer: 'CellRenderComponent',
            cellRendererParams: {
              clicked: (field: any) => {
                this.copyToClipboard(field._ownerToken);
              }
            },
          },
          {
            headerName: '內外部API',
            suppressSizeToFit: true,
            columnGroupShow: 'open',
            field: '_OwnerIsInternal',
            filterParams: this.commonService.createOwnerFIlterParams(this.apiOutsideList)
          },
          {
            headerName: '呼叫方法',
            field: 'REQUEST_METHOD',
            editable: true,
            suppressSizeToFit: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
              cellHeight: 50,
              values: ['POST', 'GET', 'PUT'],
            },
            filterParams: this.commonService.createOwnerFIlterParams(this.methodList)
          },
          {
            headerName: '擁有單位',
            field: '_ownerName',
            cellEditor: 'agSelectCellEditor',
            editable: true,
            suppressSizeToFit: true,
            cellEditorParams: {
              values: temp2
            },
            filterParams: this.commonService.createOwnerFIlterParams(this.ownerListName)
          },
          {
            headerName: '被使用專案數量',
            suppressSizeToFit: true,
            field: 'ProjectCount',
            columnGroupShow: 'open',
            filter: false,
            // editable: true,
            filterParams: {
              buttons: ['reset', 'apply'],
              debounceMs: 200
            }
          },
        ],
      },
      {
        headerName: '發布環境',
        width: 50,
        children: [
          {
            headerName: 'EDU',
            field: 'EduCount',
            width: 80,
            suppressSizeToFit: true,
            filter: false,
            // cellStyle: this.styleIncrease,
          },
          {
            headerName: 'IT',
            field: 'ItCount',
            filter: false,
            width: 80,
            suppressSizeToFit: true,
            // cellStyle: this.styleIncrease,
          },
          {
            headerName: 'SYS',
            // columnGroupShow: 'open',
            field: 'SysCount',
            width: 80,
            suppressSizeToFit: true,
            filter: false,
            // cellStyle: this.styleIncrease,
          }
        ],
      },
      {
        headerName: '參數設定',
        // width: 50,
        children: [
          {
            headerName: 'QueryString',
            field: 'QueryStringCount',
            filter: false,
            width: 120,
            suppressSizeToFit: true,
            cellRenderer: 'CellRenderWordComponent',
            cellRendererParams: {
              clicked: (field: any) => {
                const initialState = {
                  message: field,
                  title: 'QueryString'
                };
                this.modalRef = this.modalService.show(EditComponentComponent, { initialState });
                this.modalRef.setClass('modal-msd');
                this.modalRef.content.onClose.subscribe((result: boolean) => {
                  if (result) {
                    this.ngOnInit();
                  }
                });
              }
            },
          },
          {
            headerName: 'Header',
            field: 'HeaderCount',
            filter: false,
            width: 120,
            suppressSizeToFit: true,
            cellRenderer: 'CellRenderWordComponent',
            cellRendererParams: {
              clicked: (field: any) => {
                const initialState = {
                  message: field,
                  title: 'Header'
                };
                this.modalRef = this.modalService.show(EditHeaderComponent, { initialState });
                this.modalRef.setClass('modal-msd');
                this.modalRef.content.onClose.subscribe((result: boolean) => {
                  if (result) {
                    this.ngOnInit();
                  }
                });
              }
            },
          }
        ],
      },
      {
        headerName: '編輯',
        children: [
          {
            width: 120,
            headerName: '狀態',
            field: 'QueryStringCount',
            suppressSizeToFit: true,
            filter: false,
            cellRenderer: 'CellDeleteComponent',
            cellRendererParams: {
              clicked: (field: any) => {
               this.addAlert('warning', '提示' , '更新狀態', false, 1000);
              }
            },
          }
        ],
      },
    ];


	}

  copyToClipboard(item: string) {
		const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
		if (isIEOrEdge) {
			(<any>window).clipboardData.setData('Text', item);
			this.addAlert('success', '提示' , '複製', false, 1000);
		} else {
			this.addAlert('success', '提示' , '複製', false, 1000);
			document.addEventListener('copy', (e: ClipboardEvent) => {
				e.clipboardData.setData('text/plain', (item));
				e.preventDefault();
				document.removeEventListener('copy', null);
			});
			document.execCommand('copy');
		}
	}

  styleIncrease(params: any) {
		if (params.value > 0) {
			return { color: '#d32f2f', backgroundColor: '#ef9a9a' };
		}
		else if (params.value < 0) {
			return { color: '#558B2F', backgroundColor: '#C5E1A5' };
		}
		else {
			return null;
		}
	}

	onGridReady(params: any) {
		this.gridApi = params.api;
		params.api.setRowData(this.rowData);
		this.gridColumnApi = params.columnApi;
		params.columnApi.autoSizeColumns();
		// params.api.sizeColumnsToFit();
	}

	ngOnCellValueChanged(event: any) {
		if (event.data.ApiIsEnable === '啟用') {
			event.data.ApiIsEnable = 'Y';
		}
		if (event.data.ApiIsEnable === '不啟用') {
			event.data.ApiIsEnable = 'N';
		}
		this.ownerList.forEach(data => {
			if (event.data._ownerName === data.OWNER_NAME) {
				event.data.OwnerInfo.OWNER_TOKEN = data.OWNER_TOKEN;
			}
		});
		const insertApi: UpdateApiInfo = {
			OWNER_TOKEN: event.data.OwnerInfo.OWNER_TOKEN,
			REQUEST_METHOD: event.data.REQUEST_METHOD,
			API_URL: event.data.API_URL,
			API_NAME: event.data.API_NAME,
			DESCRIPTION: event.data.ApiDescription,
			IS_ENABLE: event.data.ApiIsEnable,
			CREATOR: event.data.ApiCreator,
			CREATE_TIME: event.data.ApiCreateTime,
			EDITOR: 'insertBackEnd',
			EDIT_TIME: 'insertBackEnd',
			EMPNO: 'insertBackEnd',
			API_TOKEN: event.data.API_TOKEN,
			checkIfCN: this.checkIfCN
		};
		console.log(insertApi);

    this.toastr.success('資訊變更', insertApi.API_NAME, {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });
	}
  onRowEditingStarted($event: any) {
		if (!$event.data.propertyToCheck === this.editAble) {
			this.gridApi.stopEditing();
		}
	}

	onSelectionChanged(event: any) {
		const rowsSelection = event.api.getSelectedRows();
		this.selectList = rowsSelection;
		// console.log(rowsSelection);
	}

	getOwnerList() {
		const checkCnInsert: CheckCn = {
			checkIfCN: this.checkIfCN
		};
		// const temp = this.apiManageService.GetOwnerListRequest(checkCnInsert);
		// temp.subscribe(data => {
		// 	this.ownerList = data;
		// 	const temp2: string[] = [];
		// 	data.forEach(data2 => {
		// 		temp2.push(data2.OWNER_NAME);
		// 	});
		// 	this.ownerListName = temp2;
		// });
	}

	getOwnerNameList() {
		const checkCnInsert: CheckCn = {
			checkIfCN: this.checkIfCN
		};
		// const temp = this.apiManageService.GetOwnerListRequest(checkCnInsert);
		// const temp2: string[] = [];
		// temp.subscribe(data => {
		// 	this.ownerList = data;
		// 	data.forEach(data2 => {
		// 		temp2.push(data2.OWNER_NAME);
		// 	});
		// 	this.ownerListName = temp2;
		// 	return {
		// 		cellRenderer: this.ActiveCellRenderer,
		// 		values: temp2
		// 	};
		// });
	}

	ActiveCellRenderer(params: any) {
		return params.value;
	}

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	addNew() {
		const tempData: HierarchicalApiInfo = {
			API_TOKEN: '',
			REQUEST_METHOD: '',
			API_URL: '',
			API_NAME: '',
			ApiDescription: '',
			ApiIsEnable: 'Y',
			ApiCreator: '',
			ApiCreateTime: '',
			EduCount: +'',
			ItCount: +'',
			SysCount: +'',
			QueryStringCount: +'',
			HeaderCount: +'',
			ProjectCount: +'',
			OwnerInfo: {
				OWNER_TOKEN: '',
				OwnerISENABLE: '',
				OwnerCreator: '',
				OwnerCreateTime: '',
				OWNER_NAME: '',
				OwnerIsInternal: '',
				OwnerEnvList: []
			},
			ProjectInfo: [],
			ApiHeaderInfo: [],
			ApiQueryStringInfo: [],
			checkIfCN: this.checkIfCN
		};
		const initialState = {
			message: tempData,
			title: '新增API'
		};
		this.modalRef = this.modalService.show(AddNewComponent, { initialState });
		this.modalRef.setClass('modal-md');
		this.modalRef.content.onClose.subscribe((result: boolean) => {
			if (result) {
				this.ngOnInit();
			}
		});
	}

	clickedMain() {
		this.router.navigate(['/A0A1/ADUP020S00A/manage']);
	}

	ngOnDestroy() {
		if (JSON.parse(localStorage.getItem('FirstTime-delete')) !== null) {
			localStorage.setItem('FirstTime-delete', null);
		}
	}

	changeCN() {
		this.checkIfCN = !this.checkIfCN;
    if(this.checkIfCN){
      this.addAlert('warning', '提示' ,'切換至 CN', false, 1000);
    } else {
      this.addAlert('warning', '提示' , '切換至 TW', false, 1000);
    }
	}

	downloadExcel() {
		const params = {
			skipHeader: false,
			skipFooters: true,
			skipGroups: true,
			fileName: 'export.csv'
		};
		this.gridOptions.api.exportDataAsCsv(params);
	}

	clearFilter() {
		this.gridOptions.api.setFilterModel(null);
		this.gridOptions.api.onFilterChanged();
	}

  // alert
	alerts: any[] = [];

  addAlert(type: string, header: string, msg: string, dismissible: boolean, timeout: number ): void {
  this.alerts.push({
    type: type,
    header: header,
    msg: msg,
    dismissible: dismissible,
    timeout: timeout
  });
  }

  onClosed(dismissedAlert: AlertComponent): void {
  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
