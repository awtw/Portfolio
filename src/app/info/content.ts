export class Content {
  title: string;
  Date: Date;
  project: ProjectType;
  role: RoleType[];
  content: string;

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

const content: Content[] = [
  {
    title: '震旦家具客戶管理',
    Date: new Date(2021 , 1, 5),
    project: ProjectType.CRM系統,
    role: [RoleType.PM, RoleType.軟體開發],
    content: ''
  },
  {
    title: '程式發布流程',
    Date: new Date(2020,12,12),
    project: ProjectType["CI/CD"],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    content: ''
  },
  {
    title: '異地備援專案',
    Date: new Date(2020, 11, 26),
    project: ProjectType.APP專案,
    role: [RoleType.SA],
    content: ''
  },
  {
    title: '震旦家具APP',
    Date: new Date(2020, 10, 20),
    project: ProjectType.APP專案,
    role: [RoleType.PM, RoleType.軟體開發],
    content: ''
  },
  {
    title: '版本控管流程',
    Date: new Date(2020,8,12),
    project: ProjectType["CI/CD"],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    content: ''
  },
  {
    title: 'GIT版控系統',
    Date: new Date(2020,6,20),
    project: ProjectType["CI/CD"],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    content: ''
  },
  {
    title: '目錄發布系統',
    Date: new Date(2020, 3, 5),
    project: ProjectType.ERP功能開發,
    role: [RoleType.PM, RoleType.軟體開發],
    content: ''
  },
   {
    title: '程式館控系統',
    Date: new Date(2020, 1, 3),
    project: ProjectType.ERP功能開發,
    role: [RoleType.SA, RoleType.軟體開發],
    content: ''
  },
  {
    title: '資安掃描升級專案',
    Date: new Date(2020,1,28),
    project: ProjectType.資安,
    role: [RoleType.PM, RoleType.軟體開發, RoleType.SA],
    content: ''
  },
  {
    title: '客服數據分析專案',
    Date: new Date(2019,12.25),
    project: ProjectType.PowerBI數據分析,
    role: [RoleType.PM, RoleType.軟體開發],
    content: ''
  }
]
