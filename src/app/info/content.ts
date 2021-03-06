export class Content {
  title: string;
  Date: Date;
  project: ProjectType;
  role: RoleType[];
  content: string;
  tool: ToolType[];
}

export class ExpByYear{
  year: any;
  License: ExpByMonth[];
}

export class ToolList{
  toolName: string;
  ifClick: boolean;
  toolID: any;
}

export class ExpByMonth {
  month: any;
  License: LicenseContent[] = [];
}

export class LicenseContent {
  content: string;
  type: LicenseType;
}

export enum LicenseType {
  '證照' = 0,
  '學歷' = 1,
  '經歷' = 2
}

export enum ProjectType {
  'APP專案' = 0,
  'ERP功能開發' = 1,
  'CI/CD' = 2,
  '資安' = 3,
  'PowerBI數據分析' = 5,
  'CRM系統' = 6,
}

export enum RoleType {
  'PM' = 0,
  '軟體開發' = 1,
  'SA' = 2
}
export enum ToolType {
  'C#' = 0,
  'Angular' = 1,
  'Jenkins' = 2,
  'Axure' = 3,
  'Git' = 4,
  'MSSQL' = 5,
  'PowerBI' = 6,
  'stored procedure' = 7,
  'exe' = 8,
  '站台/VM' = 9,
  'Azure' = 10
}
