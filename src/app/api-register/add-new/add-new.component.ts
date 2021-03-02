import { ApiHeaderInfo, ApiQueryStringInfo, HierarchicalApiInfo, OwnerInfo } from './../api';
import { Component, OnInit } from '@angular/core';
import { EmpInfo } from '../api';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

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
  ) { }

  ngOnInit(): void {
  }

}
