import { Injectable } from '@angular/core';
import { Filer, FilterOptions } from './common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
	internationalization() {
		return {
			// Text Filter
			contains: '包含',
			notContains: '不包含',
			startsWith: '開始於',
			endsWith: '結束於',
			// Enterprise Menu Aggregation and Status Bar
			sum: '總和',
			min: '最小',
			max: '最大',
			none: '無',
			count: '總計',
			avg: '平均',
			filteredRows: '搜尋行',
			selectedRows: '選擇行',
			page: '頁',
			more: '更多',
			to: '到',
			of: '或',
			next: '下一個',
			last: '最後',
			first: '第一個',
			previous: '先前',
			// Side Bar
			columns: '欄位',
			filters: '搜尋',
			// Filter Buttons
			applyFilter: '搜尋',
			resetFilter: '重置',
			clearFilter: '清除',
			cancelFilter: '取消',
			// Filter Conditions
			andCondition: '和',
			orCondition: '或',
			equals: '等於',
			notEqual: '不等於',
			filterOoo: '下拉選單或輸入',
			// Number Filter
			lessThan: '小於',
			greaterThan: '大於',
			lessThanOrEqual: '小於等於',
			greaterThanOrEqual: '大於等於',
			inRange: '區間',
			inRangeStart: '從',
			inRangeEnd: '到',
			noRowsToShow: '沒有資料',
		};
	}

	createOwnerFIlterParams(list: any[]) {
		const allFilterOptions: any[] = [];
		allFilterOptions.push('無選擇');
		const filterOptionsList: FilterOptions[] = [];
		list.forEach(data => {
			const temp = data.toLocaleLowerCase();
			const newFilter: FilterOptions = {
				displayKey: data,
				displayName: data,
				test: (filterValue: string, cellValue: string) => {
					return cellValue != null && cellValue.toLocaleLowerCase().indexOf(temp) === 0;
				},
				hideFilterInput: true
			};
			filterOptionsList.push(newFilter);
			allFilterOptions.push(newFilter);
		});
		const filter: Filer = {
			filterOptions: allFilterOptions,
			buttons: ['reset', 'apply'],
			debounceMs: 200
		};
		return filter;
	}

	onlyUnique(value: any, index: any, self: any) {
		return self.indexOf(value) === index;
	}

	onBtExport(titleName: string, subTitle: string, subTitleNumber: number) {
		const columnWidth = this.getBooleanValue('#columnWidth')
			? this.getTextValue('#columnWidthValue')
			: undefined;
		const params = {
			columnWidth:
				columnWidth === 'myColumnWidthCallback'
					? this.myColumnWidthCallback
					: parseFloat(columnWidth),
			sheetName:
				this.getBooleanValue('#sheetName') && this.getTextValue('#sheetNameValue'),
			exportMode: this.getBooleanValue('#exportModeXml') ? 'xml' : undefined,
			suppressTextAsCDATA: this.getBooleanValue('#suppressTextAsCDATA'),
			rowHeight: this.getBooleanValue('#rowHeight')
				? this.getNumericValue('#rowHeightValue')
				: undefined,
			headerRowHeight: this.getBooleanValue('#headerRowHeight')
				? this.getNumericValue('#headerRowHeightValue')
				: undefined,
			customHeader: [
				[],
				[
					{
						styleId: 'bigHeader',
						data: {
							type: 'String',
							value: titleName,
						},
						mergeAcross: 3,
					},
				],
				[
					{
						data: {
							type: 'String',
							value: subTitle,
						},
						mergeAcross: 2,
					},
					{
						data: {
							type: 'Number',
							value: subTitleNumber,
						},
					},
				],
				[],
			],
		};
		console.log(params);
		return params;

	}

	getBooleanValue(cssSelector: any) {
		let answer = false;
		if (document.querySelector(cssSelector)) {
			answer = true;
		}
		return answer;
	}
	getTextValue(cssSelector: any) {
		return document.querySelector(cssSelector).value;
	}
	getNumericValue(cssSelector: any) {
		const value = parseFloat(this.getTextValue(cssSelector));
		if (isNaN(value)) {
			const message = 'Invalid number entered in ' + cssSelector + ' field';
			alert(message);
			throw new Error(message);
		}
		return value;
	}
	myColumnWidthCallback(params: any) {
		const originalWidth = params.column.getActualWidth();
		if (params.index < 7) {
			return originalWidth;
		}
		return 30;
	}
}
