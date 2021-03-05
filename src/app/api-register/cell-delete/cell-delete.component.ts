import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-cell-delete',
  templateUrl: './cell-delete.component.html',
  styleUrls: ['./cell-delete.component.scss']
})
export class CellDeleteComponent implements ICellRendererAngularComp, OnDestroy {

  public params: any;
	checkIfAD: boolean;

	agInit(params: any): void {
		this.params = params;
	}

	constructor() { }

	btnClickedHandler($event: any) {
		this.params.clicked(this.params.data);
		// console.log(this.params.value);
	}

	ngOnDestroy() {
	}

	refresh(): boolean {
		return false;
	}


}
