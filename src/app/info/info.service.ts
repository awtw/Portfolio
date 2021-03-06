import { Injectable } from '@angular/core';
import { Content, RoleType, ProjectType, ToolType, ExpByYear, LicenseType } from './content';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  content: Content[] = [
  {
    title: '震旦家具客戶管理',
    Date: new Date(2021 , 1, 5),
    project: ProjectType.CRM系統,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
    ],
    content:
    '開發家具事業部所使用的客戶管理程式，包含客戶資料登記，會議紀錄，合約簽名等等，提供給家具同仁與客戶間最即時的回饋，同時也將每次拜訪及購買紀錄集中管理，讓資料更有效的運用。'
  },
  {
    title: '程式發布流程',
    Date: new Date(2020, 12, 12),
    project: ProjectType['CI/CD'],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType.Git,
        toolName: ToolType[ToolType.Git],
        ifClick: false
      },
      {
        toolID: ToolType.Jenkins,
        toolName: ToolType[ToolType.Jenkins],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
      {
        toolID: ToolType.exe,
        toolName: ToolType[ToolType.exe],
        ifClick: false
      },
    ],
    content:
    '整合 AzureDevops 及 Jenkins，將每次分支合併到主分支時透過 Jenkins Hooks 觸發，建置及發布到各個環境。 建立 Jenkins slave 避免排程過於繁重導致站台速度緩慢及工作失敗。'
  },
  {
    title: '異地備援專案',
    Date: new Date(2020, 11, 26),
    project: ProjectType.APP專案,
    role: [RoleType.SA],
    tool: [
      {
        toolID: ToolType.MSSQL,
        toolName: ToolType[ToolType.MSSQL],
        ifClick: false
      },
      {
        toolID: ToolType.Azure,
        toolName: ToolType[ToolType.Azure],
        ifClick: false
      },
      {
        toolID: ToolType['站台/VM'],
        toolName: ToolType[ToolType['站台/VM']],
        ifClick: false
      },
    ],
    content:
    '協助 DBA 及各部門資料庫及站台備援，進行災難復原的測試及啟動異地備援計畫。'
  },
  {
    title: '震旦家具APP',
    Date: new Date(2020, 10, 20),
    project: ProjectType.APP專案,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.MSSQL,
        toolName: ToolType[ToolType.MSSQL],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
    ],
    content:
    '擔任震旦家具APP專案的PM，訪問用戶的需求，同時開發與APP串接的 API，優化作業流程，協助調整資料結構及程式測試。'
  },
  {
    title: '版本控管流程',
    Date: new Date(2020, 8, 12),
    project: ProjectType['CI/CD'],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
    ],
    content:
    '協助新舊版控的上傳流程及簽核流程，開發ERP專用程式，將公司所有程式進行分類管理，並且協助批次作業流程，協助各部門程式更新及上傳。'
  },
  {
    title: 'GIT版控系統',
    Date: new Date(2020, 6, 20),
    project: ProjectType['CI/CD'],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
    ],
    content: '建立 gitflow 流程，整合AzureDevOps版本控管，協助程式簽呈作業，串接 Azure DevOps api 整合回 ERP ，並且協助解決衝突及合併主分支。'
  },
  {
    title: '目錄發布系統',
    Date: new Date(2020, 3, 5),
    project: ProjectType.ERP功能開發,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
    ],
    content:
    '開發ERP專用目錄設定程式，協助集團底下公司的ERP目錄發布，及不同職等使用的程式管控，優化及簡化目錄設定流程，直覺的操作體驗，拖拉程式即可放進目錄。'
  },
   {
    title: '程式館控系統',
    Date: new Date(2020, 1, 3),
    project: ProjectType.ERP功能開發,
    role: [RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
    ],
    content:
    '開發ERP專用程式，管理在VSS版控中的程式，開發新功能-程式維護人批次更新作業，協助部門輪調的程式管控設定，同時提供登記下架程式，排程固定檢查異常程式。'
  },
  {
    title: '資安掃描升級專案',
    Date: new Date(2020, 1, 28),
    project: ProjectType.資安,
    role: [RoleType.PM, RoleType.軟體開發, RoleType.SA],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Jenkins,
        toolName: ToolType[ToolType.Jenkins],
        ifClick: false
      },
    ],
    content:
    '協助公司導入 checkmarx 資安掃描軟體，協助每日資安掃描及提供資安修正寫法，每月提供各部門資安風險報告，開發專用ERP程式，提供資安查詢及風險數量。'
  },
  {
    title: '客服滿意度分析專案',
    Date: new Date(2019, 12.25),
    project: ProjectType.PowerBI數據分析,
    role: [RoleType.PM, RoleType.SA],
    tool: [
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
      {
        toolID: ToolType.MSSQL,
        toolName: ToolType[ToolType.MSSQL],
        ifClick: false
      },
      {
        toolID: ToolType.PowerBI,
        toolName: ToolType[ToolType.PowerBI],
        ifClick: false
      },
    ],
    content: '協助公司導入 PowerBI，擔任各幕僚單位的窗口，與客服部門訪談需求，清理資料庫髒資料，協助資料正確性，提供滿意度分析演算法，製作 PowerBI 報表'
  }
];

  ExpList: ExpByYear[] = [
    {
      year: new Date(2020, 8).getFullYear(),
      License: [
         {
          month: new Date(2020, 8).getMonth(),
          License: [
            {
              content: 'Certificate of Checkmarx',
              type: LicenseType.證照
            }
          ]
        },
      ]
    },
    {
      year: new Date(2018, 2).getFullYear(),
      License: [
         {
          month: new Date(2018, 9).getMonth(),
          License: [
            {
              content: '兵役 南投醫院-醫療役',
              type: LicenseType.經歷
            }
          ]
        },
        {
          month: new Date(2018, 8).getMonth(),
          License: [
            {
              content:  '交大畢業-碩論: 慢性腎臟病菌相檢測套組開發',
              type: LicenseType.學歷
            }
          ]
        },
        {
          month: new Date(2018, 2).getMonth(),
          License: [
            {
              content: '新創公司網站架設形象設計',
              type: LicenseType.經歷
            },
            {
              content: '交大程式設計課助教（ Python ）',
              type: LicenseType.經歷
            },
            {
              content: '交大創業學程結業',
              type: LicenseType.證照
            },
          ]
        },
      ]
    },
    {
      year: new Date(2017, 6).getFullYear(),
      License: [
        {
          month: new Date(2017, 8).getMonth(),
          License: [
            {
              content: '交大科法所網站架設及設計',
              type: LicenseType.經歷
            },
            {
              content: 'miRTarBase database paper 共同作者 (Impact Facter: 11.501)',
              type: LicenseType.學歷
            }
          ]
        },
        {
          month: new Date(2017, 6).getMonth(),
          License: [
            {
              content: 'SNMG交大生科院網管小組',
              type: LicenseType.經歷
            }
          ]
        },
      ]
    },
    {
      year: new Date(2011, 5).getFullYear(),
      License: [
        {
          month: new Date(2011, 5).getMonth(),
          License: [
            {
              content: '造園丙級技術士',
              type: LicenseType.證照
            }
          ]
        }
      ]
    },
    {
      year: new Date(2010, 7).getFullYear(),
      License: [
        {
          month: new Date(2010, 7).getMonth(),
          License: [
            {
              content: '澳洲遊學 TAFE',
              type: LicenseType.學歷
            },
            {
              content: '園藝丙級技術士',
              type: LicenseType.證照
            }
          ]
        },
      ]
    },
    {
      year: new Date(2009, 11).getFullYear(),
      License: [
        {
          month: new Date(2009, 11).getMonth() + 1,
          License: [
             {
              content: '日本遊學 巨摩高校',
              type: LicenseType.學歷
            },
          ]
        },
      ]
    },
  ];

  constructor() { }

  getContent(): Content[] {
    return this.content;
  }

  getExpList(): ExpByYear[] {
    return this.ExpList;
  }

}
