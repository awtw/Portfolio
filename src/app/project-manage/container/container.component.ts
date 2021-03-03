import { AlertComponent } from 'ngx-bootstrap/alert';
import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DptList, EmpnoList, F317InputGetCaseHomePag, F317Output, GetDivisionDptEmpno } from '../of';
import { ProjectManageService } from '../project-manage.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  modalRef: BsModalRef;
	imageUrl = './assets/images/of-project/aof-logo.png';
	imageSearchUrl = './assets/images/of-project/search-white.png';
	imagearrow = './assets/images/of-project/left-arrow-white.png';
	imageSafeUrl: SafeUrl;
	imageSearchSafeUrl: SafeUrl;
	imageArrowSafeUrl: SafeUrl;
	checkIfMain: boolean;
	getDivisionDptEmpnoList: GetDivisionDptEmpno[];
	DptList: DptList[];
	EmpnoList: EmpnoList[];
	SelectDivision = '';
	SelectDpt = '';
	selectEmpno = '';

	numberSearchInput: F317InputGetCaseHomePag;
	numberSearchOutput: F317Output;

  constructor(
    private sanitizer: DomSanitizer,
		private router: Router,
		private title: Title,
		private location: Location,
		private modalService: BsModalService,
		private projectManageService: ProjectManageService,
  ) {
    this.imageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl);
		this.imageSearchSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageSearchUrl);
		this.imageArrowSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imagearrow);
  }

  ngOnInit(): void {
  }

  sampleSearch(){

  }

  search(){

  }

  clickedMain(){

  }

  backClicked(){
    this.location.back();
  }

  // alert
	alerts: any[] = [];
	dismissible = true;

  addAlert(type: string, msg: string ): void {
  this.alerts.push({
    type: type,
    msg: msg,
    timeout: 1500
  });
  }

  onClosed(dismissedAlert: AlertComponent): void {
  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
