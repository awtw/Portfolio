import { Injectable } from '@angular/core';
import { Case, CaseType } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectManageService {

  caseList: Case[] = [
    {
      caseName: '互盛餐飲集團-採購專案',
      custComp: '互盛餐飲集團',
      custName: '陳太原',
      caseType: CaseType.採購,
      empName: '劉大右',
      startDate: new Date(2021, 3 , 2),
      caseId: 0,
      active: true,
    },
    {
      caseName: '宏光陞泰科技-整合專案',
      custComp: '宏光陞泰科技',
      custName: '李鳳梅',
      caseType: CaseType.整合,
      empName: '張倔成',
      startDate: new Date(2020, 5 , 20),
      caseId: 1,
      active: true,
    },
    {
      caseName: '維軟生技-採購專案',
      custComp: '維軟生技',
      custName: '張大和',
      caseType: CaseType.採購,
      empName: '劉大右',
      startDate: new Date(2020, 3 , 12),
      caseId: 2,
      active: false,
    },
    {
      caseName: '美鳳餐飲有限公司-採購專案',
      custComp: '美鳳餐飲有限公司',
      custName: '陳太原',
      caseType: CaseType.採購,
      empName: '劉大右',
      startDate: new Date(2019, 3 , 2),
      caseId: 3,
      active: true,
    },
  ];

  constructor() { }

  getCase(): Case[] {
    return this.caseList;
  }
}
