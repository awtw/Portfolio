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

export enum CaseType {
  '整合' = 0,
  '裝潢' = 1,
  '採購' = 2
}
