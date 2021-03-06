import { Injectable } from '@angular/core';
import { Case, Casedetail, CaseDetailList, CaseType } from './project';

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

  caseDetailList: CaseDetailList[] = [
    {
      appShow: true,
      eventId: '0',
      eventName: '需求訪談',
      title: '需求訪談',
      meetingBeginTime: new Date(2021, 2 , 2),
      meetingEndTime: new Date(2021, 2 , 2),
      messageContent: '這是我們的報價單',
      newMessage: '這是我們的報價單',
      fileName: '報價單'
    },
    {
      appShow: true,
      eventId: '1',
      eventName: '需求訪談',
      title: '需求訪談',
      meetingBeginTime: new Date(2021, 2 , 2),
      meetingEndTime: new Date(2021, 2 , 2),
      messageContent: '這是我們的報價單',
      newMessage: '這是我們的報價單',
      fileName: '報價單'
    },
    {
      appShow: true,
      eventId: '2',
      eventName: '需求訪談',
      title: '需求訪談',
      meetingBeginTime: new Date(2021, 2 , 2),
      meetingEndTime: new Date(2021, 2 , 2),
      messageContent: '這是我們的報價單',
      newMessage: '這是我們的報價單',
      fileName: '報價單'
    },
    {
      appShow: true,
      eventId: '3',
      eventName: '需求訪談',
      title: '需求訪談',
      meetingBeginTime: new Date(2021, 2 , 2),
      meetingEndTime: new Date(2021, 2 , 2),
      messageContent: '這是我們的報價單',
      newMessage: '這是我們的報價單',
      fileName: '報價單'
    },
    {
      appShow: true,
      eventId: '4',
      eventName: '需求訪談',
      title: '需求訪談',
      meetingBeginTime: new Date(2021, 2 , 2),
      meetingEndTime: new Date(2021, 2 , 2),
      messageContent: '這是我們的報價單',
      newMessage: '這是我們的報價單',
      fileName: '報價單'
    },
  ];

  Casedetail: Casedetail = {
    caseId: '1',
    caseType: '裝修',
    title: '互盛餐飲集團-採購專案',
    subtitle: '互盛餐飲集團-採購專案',
    status: '保價中',
    ctno: '123456',
    caseBeginTime: new Date(2021, 2 , 3),
    caseEndTime: new Date(2021, 2 , 3),
    servEmpName: '劉大右',
    servItemName: '',
    servItems: '',
    custName: '陳太原',
    custno: '123',
    appShow: true,
    OfList: [
      {
        name: '劉大右',
        empno: '123456',
        key: true
      }
    ],
    CustList: [
      {
         name: '陳太原',
        empno: '123456',
        key: true
      }
    ],
    eventName: [
      {
        eventName: '123'
      }
    ],
    srno: true,
    takeCaseShow: true,
    insertEvent: true
  };

  constructor() { }

  getCase(): Case[] {
    return this.caseList;
  }

  getCaseDetail(): CaseDetailList[] {
    return this.caseDetailList;
  }

  getCasedetail(): Casedetail {
    return this.Casedetail;
  }
}
