import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { HierarchicalApiInfo, ApiQueryStringInfo } from '../api';
import { ApiRegisterService } from '../api-register.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {
  message: HierarchicalApiInfo;
	title: string;
	insertData: ApiQueryStringInfo[] = [];
	public onClose: Subject<boolean>;
  constructor(
    public bsModalRef: BsModalRef,
		private toastr: ToastrService,
    private apiRegisterService: ApiRegisterService,
  ) { }

  ngOnInit(): void {
    this.onClose = new Subject();
  }

  addQuery() {
		const temp: ApiQueryStringInfo = {
			ApiQueryKey: '',
			ApiQueryKeyRequired: 'Y'
		};
		this.message.ApiQueryStringInfo.push(temp);
	}

  deleteQuery(i: number)
	{
		this.message.ApiQueryStringInfo.splice(i, 1);
	}

  add(){
    this.toastr.success( 'QuesyString 資訊變更'  , this.message.API_NAME, {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });
    this.bsModalRef.hide();
    this.onClose.next(true);
		// if (this.message.ApiQueryStringInfo.length < 1){
		// 	const InsertArray: InsertApiKey[] = [];
		// 	const insert: InsertApiKey = {
		// 		API_TOKEN: this.message.API_TOKEN,
		// 		KEY: '',
		// 		IS_REQUIRED: '',
		// 		Name: this.message.API_NAME,
		// 		checkIfCN: this.message.checkIfCN
		// 	};
		// 	InsertArray.push(insert);
		// 	const insertApiQueryStringRequest = this.apiManageService.PostInsertApiQueryStringInfoRquest(InsertArray).subscribe(response => {
		// 		if (response.Code === 200) {
		// 			this.toastr.success( '刪除所有QueryString驗證資訊'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.onClose.next(true);
		// 			this.bsModalRef.hide();
		// 		} else {
		// 			this.toastr.error( 'QuesyString 資訊變更失敗'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.onClose.next(true);
		// 			this.bsModalRef.hide();
		// 		}
		// 	});
		// } else {
		// 	// tslint:disable-next-line:prefer-for-of
		// 	for (let i = 0; i < this.message.ApiQueryStringInfo.length; i++) {
		// 		if (this.message.ApiQueryStringInfo[i].ApiQueryKey.trim() !== '') {
		// 			this.insertData.push(this.message.ApiQueryStringInfo[i]);
		// 		}
		// 	}
		// 	this.message.ApiQueryStringInfo = this.insertData;
		// 	const InsertArray: InsertApiKey[] = [];
		// 	this.message.ApiQueryStringInfo.forEach(data => {
		// 		if (data.Mandatory){
		// 			const insert: InsertApiKey = {
		// 				API_TOKEN: this.message.API_TOKEN,
		// 				KEY: data.ApiQueryKey,
		// 				IS_REQUIRED: 'Y',
		// 				Name: this.message.API_NAME,
		// 				checkIfCN: this.message.checkIfCN
		// 			};
		// 			InsertArray.push(insert);
		// 		} else {
		// 			const insert: InsertApiKey = {
		// 				API_TOKEN: this.message.API_TOKEN,
		// 				KEY: data.ApiQueryKey,
		// 				IS_REQUIRED: '',
		// 				Name: this.message.API_NAME,
		// 				checkIfCN: this.message.checkIfCN
		// 			};
		// 			InsertArray.push(insert);
		// 		}
		// 	});
		// 	// console.log(InsertArray);
		// 	const insertApiQueryStringRequest = this.apiManageService.PostInsertApiQueryStringInfoRquest(InsertArray).subscribe(response => {
		// 		if (response.Code === 200) {
		// 			this.toastr.success( 'QuesyString 資訊變更'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.onClose.next(true);
		// 			this.bsModalRef.hide();
		// 		} else {
		// 			this.toastr.error( 'QuesyString 資訊變更失敗'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.onClose.next(true);
		// 			this.bsModalRef.hide();
		// 		}
		// 	});
		// }
	}

  notSave(){
		this.bsModalRef.hide();
		// tslint:disable-next-line:prefer-for-of
		for (let i = 0; i < this.message.ApiQueryStringInfo.length; i++) {
				if (this.message.ApiQueryStringInfo[i].ApiQueryKey.trim() !== '') {
					this.insertData.push(this.message.ApiQueryStringInfo[i]);
				}
			}
		this.message.ApiQueryStringInfo = this.insertData;
		this.onClose.next(false);
	}

}
