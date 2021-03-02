import { ApiHeaderInfo, HierarchicalApiInfo, InsertApiKey } from './../api';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiRegisterService } from '../api-register.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {
  message: HierarchicalApiInfo;
	title: string;
	insertData: ApiHeaderInfo[] = [];
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
		const temp: ApiHeaderInfo = {
			ApiHeaderKey: '',
			ApiHeaderKeyRequired: 'Y',
		};
		this.message.ApiHeaderInfo.push(temp);
	}

	deleteQuery(i: number)
	{
		this.message.ApiHeaderInfo.splice(i, 1);
	}

	add(){
    this.toastr.success( '刪除所有Header驗證'  , this.message.API_NAME, {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });


		// if (this.message.ApiHeaderInfo.length < 1){
		// 	const InsertArray: InsertApiKey[] = [];
		// 	const insert: InsertApiKey = {
		// 			API_TOKEN: this.message.API_TOKEN,
		// 			KEY: '',
		// 			IS_REQUIRED: '',
		// 			Name: this.message.API_NAME,
		// 			checkIfCN: this.message.checkIfCN
		// 		};
		// 	InsertArray.push(insert);
    //   			const insertApiQueryStringRequest = this.apiManageService.PostInsertApiHeaderInfoRquest(InsertArray).subscribe(response => {
		// 		if (response.Code === 200) {
		// 			this.toastr.success( '刪除所有Header驗證'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.bsModalRef.hide();
		// 			this.onClose.next(true);
		// 		} else {
		// 			this.toastr.error( 'QuesyString 資訊變更失敗'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.bsModalRef.hide();
		// 			this.onClose.next(true);
		// 		}
		// 	});
		// } else {
		// 	// tslint:disable-next-line:prefer-for-of
		// 	for (let i = 0; i < this.message.ApiHeaderInfo.length; i++) {
		// 		if (this.message.ApiHeaderInfo[i].ApiHeaderKey.trim() !== '') {
		// 			this.insertData.push(this.message.ApiHeaderInfo[i]);
		// 		}
		// 	}
		// 	this.message.ApiHeaderInfo = this.insertData;
		// 	const InsertArray: InsertApiKey[] = [];
		// 	this.message.ApiHeaderInfo.forEach(data => {

		// 		if (data.Mandatory){
		// 			const insert: InsertApiKey = {
		// 				API_TOKEN: this.message.API_TOKEN,
		// 				KEY: data.ApiHeaderKey,
		// 				IS_REQUIRED: 'Y',
		// 				Name: this.message.API_NAME,
		// 				checkIfCN: this.message.checkIfCN
		// 			};
		// 			InsertArray.push(insert);
		// 		} else {
		// 			const insert: InsertApiKey = {
		// 				API_TOKEN: this.message.API_TOKEN,
		// 				KEY: data.ApiHeaderKey,
		// 				IS_REQUIRED: '',
		// 				Name: this.message.API_NAME,
		// 				checkIfCN: this.message.checkIfCN
		// 			};
		// 			InsertArray.push(insert);
		// 		}
		// 	});
		// 	// console.log(InsertArray);
		// 	const insertApiQueryStringRequest = this.apiManageService.PostInsertApiHeaderInfoRquest(InsertArray).subscribe(response => {
		// 		if (response.Code === 200) {
		// 			this.toastr.success( 'QuesyString 資訊變更'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.bsModalRef.hide();
		// 			this.onClose.next(true);
		// 		} else {
		// 			this.toastr.error( 'QuesyString 資訊變更失敗'  , this.message.API_NAME, {
		// 				timeOut: 1500,
		// 				positionClass: 'toast-top-right',
		// 			});
		// 			this.bsModalRef.hide();
		// 			this.onClose.next(true);
		// 		}
		// 	});
		// }
	}

	notSave(){
		this.bsModalRef.hide();
		// tslint:disable-next-line:prefer-for-of
		for (let i = 0; i < this.message.ApiHeaderInfo.length; i++) {
				if (this.message.ApiHeaderInfo[i].ApiHeaderKey.trim() !== '') {
					this.insertData.push(this.message.ApiHeaderInfo[i]);
				}
			}
		this.message.ApiHeaderInfo = this.insertData;
		this.onClose.next(false);
	}

}
