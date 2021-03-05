import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-cell-render-word',
  templateUrl: './cell-render-word.component.html',
  styleUrls: ['./cell-render-word.component.scss']
})
export class CellRenderWordComponent implements ICellRendererAngularComp, OnDestroy {

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
