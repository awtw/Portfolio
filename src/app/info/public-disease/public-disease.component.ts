import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-public-disease',
  templateUrl: './public-disease.component.html',
  styleUrls: ['./public-disease.component.scss']
})
export class PublicDiseaseComponent implements OnInit {
  title: string;
  public onClose: Subject<boolean>;
  powerbi = 'assets/images/info/powerbi.png';
  constructor( private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }
  notSave(): void {
    this.bsModalRef.hide();
  }

  publicDisease(): void {
    window.open('https://app.powerbi.com/groups/me/reports/cfae91cb-21d5-4954-9352-1b0a91fe8055/ReportSection5eaa1be4b01b6de9a52e?noSignUpCheck=1', '_blank');
  }

}
