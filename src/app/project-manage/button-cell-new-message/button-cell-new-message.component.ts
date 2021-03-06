import { Component, OnDestroy } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-cell-new-message',
  templateUrl: './button-cell-new-message.component.html',
  styleUrls: ['./button-cell-new-message.component.scss']
})
export class ButtonCellNewMessageComponent implements ICellRendererAngularComp, OnDestroy {

  imageUrl = './assets/images/of-project/comment.png';
  imageUrl2 = './assets/images/of-project/app.png';
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
  }

}
