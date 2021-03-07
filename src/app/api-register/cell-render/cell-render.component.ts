import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-cell-render',
  templateUrl: './cell-render.component.html',
  styleUrls: ['./cell-render.component.scss']
})
export class CellRenderComponent implements ICellRendererAngularComp, OnDestroy {
  copyImage = 'assets/images/api-register/copy.png';
  public params: any;

	agInit(params: any): void {
		this.params = params;
	}

	btnClickedHandler($event: any) {
		this.params.clicked(this.params.data);
		// console.log(this.params);
	}

	ngOnDestroy() {
	}

	refresh(): boolean {
		return false;
	}

	constructor() { }

}
