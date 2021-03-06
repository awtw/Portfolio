import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-cell-alert',
  templateUrl: './button-cell-alert.component.html',
  styleUrls: ['./button-cell-alert.component.scss']
})
export class ButtonCellAlertComponent implements ICellRendererAngularComp, OnDestroy  {

  imageUrl = './assets/images/of-project/email.png';
  imageUrl2 = './assets/images/of-project/show.png';
  imageUrlhiden = './assets/images/of-project/hide.png';
  imageUrlSafeUrlhiden: SafeUrl;
  imageUrlSafeUrl: SafeUrl;
  imageUrlSafeUrl2: SafeUrl;
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler($event: any): void {
    this.params.clicked(this.params.value);
    console.log(this.params.data);
  }

  ngOnDestroy(): void {
  }

  refresh(): boolean {
    return false;
  }

  constructor(private sanitizer: DomSanitizer) {
    this.imageUrlSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl);
    this.imageUrlSafeUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl2);
    this.imageUrlSafeUrlhiden = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrlhiden);
  }

}
