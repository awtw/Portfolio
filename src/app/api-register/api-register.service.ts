import { Injectable } from '@angular/core';
import { CheckCn } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiRegisterService {

  constructor() { }

  GetAPiInfoListRequest(check: CheckCn) {
		// return this.http.post<HierarchicalApiInfo[]>(
		// 	this.apiPrefix + 'PostAPiInfoList' , check
		// );
	}

}
