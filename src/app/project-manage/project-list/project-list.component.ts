import { ProjectManageService } from './../project-manage.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CaseScreening, CaseScreeningIn } from '../of';
import { Case } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  modalRef: BsModalRef;
  imageUrlPurchase = './assets/images/of-project/purchase.png';
  imageUrlFix = './assets/images/of-project/fix.png';
  caseList: Case[] = [];


  constructor(
    private sanitizer: DomSanitizer,
    private title: Title,
    private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectManageService: ProjectManageService,
  ) {
  }

  ngOnInit(): void {
    this.caseList = this.projectManageService.getCase();
  }

  goToProject(id: number): void{
    this.router.navigate(['id'], { relativeTo: this.activatedRoute });
  }

  goHomePage(): void{
    this.router.navigate(['../../info'], { relativeTo: this.activatedRoute });
  }

  addNew(string: any): void{

  }

}
