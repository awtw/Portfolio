export class Case {
  caseName: string;
  custComp: string;
  custName: string;
  caseType: CaseType;
  empName: string;
  startDate: Date;
  caseId: number;
  active: boolean;
}

export class CaseDetailList {
  appShow: boolean;
  eventId: string;
  eventName: string;
  title: string;
  meetingBeginTime: Date;
  meetingEndTime: Date;
  messageContent: string;
  newMessage: string;
  fileName: string;
}

export class Casedetail {
  caseId: string;
  caseType: string;
  title: string;
  subtitle: string;
  status: string;
  ctno: string;
  caseBeginTime: Date;
  caseEndTime: Date;
  servEmpName: string;
  servItemName: string;
  servItems: string;
  custName: string;
  custno: string;
  appShow: boolean;
  OfList: Contact[];
  CustList: Contact[];
  eventName: EventName[];
  srno: any;
  takeCaseShow: boolean;
  insertEvent: boolean;
}

export class Contact {
  name: string;
  empno: string;
  key: boolean;
}

export class EventName {
  eventName: string;
}

export enum CaseType {
  '整合' = 0,
  '裝潢' = 1,
  '採購' = 2
}
