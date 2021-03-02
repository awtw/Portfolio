import { ApiHeaderInfo, ApiQueryStringInfo, CheckCn, HierarchicalApiInfo, OwnerInfo } from './../api';
import { Component, OnInit } from '@angular/core';
import { EmpInfo } from '../api';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiRegisterService } from '../api-register.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  maintainerList: EmpInfo[] = [];
	message: HierarchicalApiInfo;
	title: string;
	insertDataHeader: ApiHeaderInfo[] = [];
	insertDataQuery: ApiQueryStringInfo[] = [];
	public onClose: Subject<boolean>;
	isEnable: boolean;
	ownerList: OwnerInfo[];

  constructor(
    public bsModalRef: BsModalRef,
		private toastr: ToastrService,
    private apiRegisterService: ApiRegisterService,
  ) { }

  ngOnInit(): void {
    this.onClose = new Subject();
		if (this.message.ApiIsEnable === 'Y') {
			this.isEnable = true;
		} else {
			this.isEnable = false;
		}
		// console.log(this.message.ApiIsEnable);
		// this.getOwnerList();
		// this.getMataiinerList();
		this.message.ApiIsEnable = 'Y';
		this.message.REQUEST_METHOD = 'Post';
  }

  addHeader() {
		const temp: ApiHeaderInfo = {
			ApiHeaderKey: '',
			ApiHeaderKeyRequired: 'Y',
		};
		this.message.ApiHeaderInfo.push(temp);
	}

	addQuery() {
		const temp: ApiQueryStringInfo = {
			ApiQueryKey: '',
			ApiQueryKeyRequired: 'Y'
		};
		this.message.ApiQueryStringInfo.push(temp);
	}

	deleteHeader(i: number) {
		this.message.ApiHeaderInfo.splice(i, 1);
	}
	deleteQuery(i: number) {
		this.message.ApiQueryStringInfo.splice(i, 1);
	}
  add() {
    this.toastr.success('Header 資訊變更', this.message.API_NAME, {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });
    this.bsModalRef.hide();
    this.onClose.next(true);

		// if (this.message.REQUEST_METHOD === '') {
		// 	this.message.REQUEST_METHOD = 'Post';
		// }
		// if (this.isEnable) {
		// 	this.message.ApiIsEnable = 'Y';
		// }
		// if (!this.isEnable) {
		// 	this.message.ApiIsEnable = 'N';
		// }
		// this.ownerList.forEach(data => {
		// 	if (this.message._ownerName === data.OWNER_NAME) {
		// 		this.message.OwnerInfo.OWNER_TOKEN = data.OWNER_TOKEN;
		// 	}
		// });
		// const insertApi: UpdateApiInfo = {
		// 	OWNER_TOKEN: this.message.OwnerInfo.OWNER_TOKEN,
		// 	REQUEST_METHOD: this.message.REQUEST_METHOD,
		// 	API_URL: this.message.API_URL,
		// 	API_NAME: this.message.API_NAME,
		// 	DESCRIPTION: this.message.ApiDescription,
		// 	IS_ENABLE: this.message.ApiIsEnable,
		// 	CREATOR: this.message.ApiCreator,
		// 	CREATE_TIME: this.message.ApiCreateTime,
		// 	EDITOR: 'insertBackEnd',
		// 	EDIT_TIME: 'insertBackEnd',
		// 	EMPNO: 'insertBackEnd',
		// 	API_TOKEN: this.message.API_TOKEN,
		// 	checkIfCN: this.message.checkIfCN
		// };
		// const requestInsertApi = this.apiManageService.PostInsertApiInfoRequest(insertApi).subscribe(data1 => {
		// 	if (data1.Code === 200) {
		// 		this.toastr.success('API 添加成功', this.message.API_NAME, {
		// 			timeOut: 1500,
		// 			positionClass: 'toast-top-right',
		// 		});
		// 		// tslint:disable-next-line:prefer-for-of
		// 		for (let i = 0; i < this.message.ApiHeaderInfo.length; i++) {
		// 			if (this.message.ApiHeaderInfo[i].ApiHeaderKey.trim() !== '') {
		// 				this.insertDataHeader.push(this.message.ApiHeaderInfo[i]);
		// 			}
		// 		}
		// 		this.message.ApiHeaderInfo = this.insertDataHeader;
		// 		// tslint:disable-next-line:prefer-for-of
		// 		for (let i = 0; i < this.message.ApiQueryStringInfo.length; i++) {
		// 			if (this.message.ApiQueryStringInfo[i].ApiQueryKey.trim() !== '') {
		// 				this.insertDataQuery.push(this.message.ApiQueryStringInfo[i]);
		// 			}
		// 		}
		// 		this.message.ApiQueryStringInfo = this.insertDataQuery;
		// 		this.message.ApiHeaderInfo = this.insertDataHeader;

		// 		if (this.insertDataQuery.length < 1 && this.insertDataHeader.length < 1) {
		// 			this.bsModalRef.hide();
		// 			this.onClose.next(true);
		// 		}
		// 		if (this.insertDataQuery.length >= 1 && this.insertDataHeader.length >= 1) {
		// 			const InsertArrayHeader: InsertApiKey[] = [];
		// 			this.message.ApiHeaderInfo.forEach(data => {
		// 				if (data.Mandatory) {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiHeaderKey,
		// 						IS_REQUIRED: 'Y',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayHeader.push(insert);
		// 				} else {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiHeaderKey,
		// 						IS_REQUIRED: '',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayHeader.push(insert);
		// 				}
		// 			});

		// 			const InsertArrayQuery: InsertApiKey[] = [];
		// 			this.message.ApiQueryStringInfo.forEach(data => {
		// 				if (data.Mandatory) {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiQueryKey,
		// 						IS_REQUIRED: 'Y',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayQuery.push(insert);
		// 				} else {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiQueryKey,
		// 						IS_REQUIRED: '',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayQuery.push(insert);
		// 				}
		// 			});
		// 			const insertApHeaderRequest = this.apiManageService.PostInsertApiHeaderInfoRquest(InsertArrayHeader).subscribe(response => {
		// 				if (response.Code === 200) {
		// 					this.toastr.success('Header 資訊變更', this.message.API_NAME, {
		// 						timeOut: 1500,
		// 						positionClass: 'toast-top-right',
		// 					});
		// 					const insertApiQueryStringRequest = this.apiManageService.PostInsertApiQueryStringInfoRquest(InsertArrayQuery).subscribe(response2 => {
		// 						if (response2.Code === 200) {
		// 							this.toastr.success('QuesyString 資訊變更', this.message.API_NAME, {
		// 								timeOut: 1500,
		// 								positionClass: 'toast-top-right',
		// 							});
		// 							this.onClose.next(true);
		// 							this.bsModalRef.hide();
		// 						} else {
		// 							this.toastr.error('QuesyString 資訊變更失敗', this.message.API_NAME, {
		// 								timeOut: 1500,
		// 								positionClass: 'toast-top-right',
		// 							});
		// 							this.onClose.next(true);
		// 							this.bsModalRef.hide();
		// 						}
		// 					});
		// 					this.bsModalRef.hide();
		// 					this.onClose.next(true);
		// 				} else {
		// 					this.toastr.error('Header 資訊變更失敗', this.message.API_NAME, {
		// 						timeOut: 1500,
		// 						positionClass: 'toast-top-right',
		// 					});
		// 					this.bsModalRef.hide();
		// 					this.onClose.next(true);
		// 				}
		// 			});
		// 		}
		// 		if (this.insertDataQuery.length >= 1 && this.insertDataHeader.length < 1) {
		// 			const InsertArrayQuery: InsertApiKey[] = [];
		// 			this.message.ApiQueryStringInfo.forEach(data => {
		// 				if (data.Mandatory) {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiQueryKey,
		// 						IS_REQUIRED: 'Y',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayQuery.push(insert);
		// 				} else {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiQueryKey,
		// 						IS_REQUIRED: '',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayQuery.push(insert);
		// 				}
		// 			});
		// 			const insertApiQueryStringRequest = this.apiManageService.PostInsertApiQueryStringInfoRquest(InsertArrayQuery).subscribe(response => {
		// 				if (response.Code === 200) {
		// 					this.toastr.success('QuesyString 資訊變更', this.message.API_NAME, {
		// 						timeOut: 1500,
		// 						positionClass: 'toast-top-right',
		// 					});
		// 					this.onClose.next(true);
		// 					this.bsModalRef.hide();
		// 				} else {
		// 					this.toastr.error('QuesyString 資訊變更失敗', this.message.API_NAME, {
		// 						timeOut: 1500,
		// 						positionClass: 'toast-top-right',
		// 					});
		// 					this.onClose.next(true);
		// 					this.bsModalRef.hide();
		// 				}
		// 			});
		// 		}
		// 		if (this.insertDataQuery.length < 1 && this.insertDataHeader.length >= 1) {
		// 			const InsertArrayHeader: InsertApiKey[] = [];
		// 			this.message.ApiHeaderInfo.forEach(data => {
		// 				if (data.Mandatory) {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiHeaderKey,
		// 						IS_REQUIRED: 'Y',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayHeader.push(insert);
		// 				} else {
		// 					const insert: InsertApiKey = {
		// 						API_TOKEN: this.message.API_TOKEN,
		// 						KEY: data.ApiHeaderKey,
		// 						IS_REQUIRED: '',
		// 						Name: this.message.API_NAME,
		// 						checkIfCN: this.message.checkIfCN
		// 					};
		// 					InsertArrayHeader.push(insert);
		// 				}
		// 			});
		// 			const insertApHeaderRequest = this.apiManageService.PostInsertApiHeaderInfoRquest(InsertArrayHeader).subscribe(response => {
		// 				if (response.Code === 200) {
		// 					this.toastr.success('Header 資訊變更', this.message.API_NAME, {
		// 						timeOut: 1500,
		// 						positionClass: 'toast-top-right',
		// 					});
		// 					this.bsModalRef.hide();
		// 					this.onClose.next(true);
		// 				} else {
		// 					this.toastr.error('Header 資訊變更失敗', this.message.API_NAME, {
		// 						timeOut: 1500,
		// 						positionClass: 'toast-top-right',
		// 					});
		// 					this.bsModalRef.hide();
		// 					this.onClose.next(true);
		// 				}
		// 			});
		// 		}
		// 	}
		// 	else {
		// 		this.toastr.error('API 添加失敗', this.message.API_NAME, {
		// 			timeOut: 1500,
		// 			positionClass: 'toast-top-right',
		// 		});
		// 	}
		// });
	}

	notSave() {
		this.bsModalRef.hide();
		// tslint:disable-next-line:prefer-for-of
		for (let i = 0; i < this.message.ApiHeaderInfo.length; i++) {
			if (this.message.ApiHeaderInfo[i].ApiHeaderKey.trim() !== '') {
				this.insertDataHeader.push(this.message.ApiHeaderInfo[i]);
			}
		}
		this.message.ApiHeaderInfo = this.insertDataHeader;
		// tslint:disable-next-line:prefer-for-of
		for (let i = 0; i < this.message.ApiQueryStringInfo.length; i++) {
			if (this.message.ApiQueryStringInfo[i].ApiQueryKey.trim() !== '') {
				this.insertDataQuery.push(this.message.ApiQueryStringInfo[i]);
			}
		}
		this.message.ApiQueryStringInfo = this.insertDataQuery;
		this.onClose.next(false);
	}

	getOwnerList() {
		const insert: CheckCn = {
			checkIfCN: this.message.checkIfCN
		};
			this.ownerList =  this.apiRegisterService.GetOwnerListRequest(insert);
			this.message.OwnerInfo.OWNER_TOKEN = this.ownerList[1].OWNER_TOKEN;
	}

	getMataiinerList() {
			this.maintainerList =  this.apiRegisterService.getMaintainerInfoRequest();
	}

}
