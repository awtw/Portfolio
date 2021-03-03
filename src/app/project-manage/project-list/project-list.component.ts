import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CaseScreening, CaseScreeningIn } from '../of';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  modalRef: BsModalRef;
	projectType: string;
	projectTypeName: string;
	imageUrlPurchase = './assets/images/of-project/purchase.png';
	imageUrlFix = './assets/images/of-project/fix.png';
	imagePurchaseSafeUrl: SafeUrl;
	imageFixSafeUrl2: SafeUrl;
	CaseScreeningLisit: CaseScreening;
	checkTab: boolean;
	caseScreeningIn: CaseScreeningIn = {
		division: '',
		dpt: '',
		empno: '',
		caseTitle: '',
		eventTitle: '',
		dateTime1: '',
		dateTime2: '',
		caseType: '',
		cstatus: '',
		custno: '',
		Buystatus: ['A'],
		Repairstatus: ['A', 'B']
	};

  constructor(
    private sanitizer: DomSanitizer,
    private title: Title,
		private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.imagePurchaseSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrlPurchase);
		this.imageFixSafeUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrlFix);
  }

  ngOnInit(): void {
  }

  goToProject(string: any){
    this.router.navigate(['page'], { relativeTo: this.activatedRoute });
  }

  clickTab(){

  }

  addNew(string: any){

  }

}
