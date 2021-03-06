import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AboutMeComponent } from '../about-me/about-me.component';
import { PaymeComponent } from '../payme/payme.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  rocket = '../../../assets/images/info/rocket.png';
  github = '../../../assets/images/info/github.png';
  behance = '../../../assets/images/info/behance.png';
  support = '../../../assets/images/info/protest.png';
  me = '../../../assets/images/info/me-sm.png';
  modalRef: BsModalRef;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  apiRegister(): void {
    this.router.navigate(['../api-register'], { relativeTo: this.activatedRoute });
  }

  aboutMe(): void {
    const initialState = {
      title: '關於我'
    };
    this.modalRef = this.modalService.show(AboutMeComponent, { initialState });
    this.modalRef.setClass('modal-md');
    // this.modalRef.content.onClose.subscribe((result: boolean) => {
    // });
  }
  supportMe(): void {
    const initialState = {
      title: '支持我'
    };
    this.modalRef = this.modalService.show(PaymeComponent, { initialState });
    this.modalRef.setClass('modal-md');
    // this.modalRef.content.onClose.subscribe((result: boolean) => {
    // });
  }

  beHance(): void{
    window.open('https://www.behance.net/alex012332fd01', '_blank');
  }

  gitHub(): void{
    window.open('https://github.com/awtw', '_blank');
  }

}
