import { Injectable } from '@angular/core';
import { CheckCn, EmpInfo, HierarchicalApiInfo, OwnerInfo, UserInfo } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiRegisterService {
  apiList: HierarchicalApiInfo[] = [
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "30910205-4a83-49b3-9d8b-002adaf6c3b9",
        "API_NAME": "刪除顧客現有設備",
        "ApiDescription": "EQ211- 刪除顧客現有設備",
        "API_URL": "ErpNextSdApi/api/Equipment/DeleteExisted",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 2
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a12b347e-a27a-4759-a992-004a22219ae5",
        "API_NAME": "getUnreadList",
        "ApiDescription": "MC015-取得我的頁面各功能未讀數量",
        "API_URL": "ErpNextSdApi/api/OASmMyCenter/getUnreadList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00038832",
            "OwnerCreateTime": "20181121100211",
            "OWNER_NAME": "魁亨ALL",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f664367e-3057-416f-910a-63a4cda91bba",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                    "EnvDescription": "魁亨ALL測試EDU",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                },
                {
                    "OWNER_ENV_TOKEN": "41ed9b91-3747-4397-9d61-6919be39b458",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://119.81.165.141/aurora_api/api",
                    "EnvDescription": "魁亨ALL正式SYS",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                },
                {
                    "OWNER_ENV_TOKEN": "2892b3be-9a5c-4df7-a59d-89638b179167",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                    "EnvDescription": "魁亨ALL測試IT",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c48d37ce-0f18-4681-bb3d-02dec58a6351",
        "API_NAME": "PS012-取得留言板資料",
        "ApiDescription": "取得留言板資料",
        "API_URL": "/site/getcontactusdata",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181121100730",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "015b79be-3239-460f-8dc4-631643cb0aaf",
                "PROJECT_NAME": "A0A2之銷售雲",
                "ProjectDescription": "提供A0A2部門人員資料、同仁帳密驗證",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00033567",
                "ProjectCreateTime": "20191031102655"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "14335c87-edc3-4d55-bf6b-035b57ed0b31",
        "API_NAME": "取得同仁帳密驗證",
        "ApiDescription": "EmployeeValidPassword-取得同仁帳密驗證",
        "API_URL": "ErpNextHrApi/api/OASalesCloud/EmployeeValidPassword",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033567",
        "ApiCreateTime": "20191115093701",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 2
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6981495b-356d-4b4d-9c3a-03dc16609496",
        "API_NAME": "P04006 查詢已下單狀態資訊",
        "ApiDescription": "P04006 查詢已下單狀態資訊",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getOrderInfo",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200706093129",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 2
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00042852",
            "OwnerCreateTime": "20190912181217",
            "OWNER_NAME": "研發部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ad15f962-f544-4c76-8b40-0408dc79d1f1",
        "API_NAME": "取得服務日報API",
        "ApiDescription": "取得服務日報API",
        "API_URL": "ErpNextAdApi/api/mobile/MGMDGetSMCKDoc",
        "REQUEST_METHOD": "GET",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "20200304120031",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c53112b9-bf36-4f86-bacc-049e6489c8c7",
        "API_NAME": "DR005 已閱讀主管回覆",
        "ApiDescription": "同仁閱讀主管回覆回壓閱讀時間",
        "API_URL": "ErpNextSdApi/api/DailyReport/ReplyDailyReport",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "202012101404  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c06db0b3-be40-4b0b-bddf-068bacbae32f",
        "API_NAME": "updateProblemLike",
        "ApiDescription": "SM004\t對故障問題按讚",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/updateProblemLike",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9a5384cd-2356-478e-9fa1-068d485cdf1b",
        "API_NAME": "BOSS707顧客資料-服務歷程",
        "ApiDescription": "BOSS707顧客資料-服務歷程",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerServiceHistory",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f142e5e2-7392-42c8-bfd0-07b35c0ab099",
        "API_NAME": "M01007 取得機器相關資訊(僅用在輸入驗證碼時使用)",
        "ApiDescription": "M01007 取得機器相關資訊(僅用在輸入驗證碼時使用)",
        "API_URL": "ErpNextSdApi/api/OACuMember/getMachineInfoByKeyIn",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200421113603",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cabc1320-2b33-4175-8bfc-07ef3c2601d5",
        "API_NAME": "pbi推播測試",
        "ApiDescription": "pbi推播測試",
        "API_URL": "ErpNextSdApi/api/PowerApps/GetNotifDataList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010230938  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e7f10cbc-efb6-4b0b-87f6-08278a4e838a",
        "API_NAME": "BOSS608 上傳頭像圖片",
        "ApiDescription": "BOSS608 上傳頭像圖片",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/ProfilePicture",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191104091433",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "eb9bcacb-a197-44f5-a428-092e11f75b55",
        "API_NAME": "M01004",
        "ApiDescription": "驗證結果(含儲存會員資訊)",
        "API_URL": "ErpNextSdApi/api/OACuMember/getVerificationCode",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e65a54bd-475a-49e8-8612-09eec63d5e2f",
        "API_NAME": "刪除顧客",
        "ApiDescription": "CD103-刪除顧客",
        "API_URL": "ErpNextSdApi/api/CustomerData/DeleteCustomer",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "303f7e2f-9acf-4e7b-82be-0b17692145aa",
        "API_NAME": "H01001",
        "ApiDescription": "故障類別",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/getMaintainClass",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "555b4cc6-ce52-4c5c-b6a1-0c6073d247e4",
        "API_NAME": "getScreeningItems",
        "ApiDescription": "SM006\t取得問題篩選項目",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/getScreeningItems",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b94310ad-85ab-4f67-bf13-0c6b2b5ce8c6",
        "API_NAME": "SendEinvContent",
        "ApiDescription": "DI022-寄送電子發票連絡人",
        "API_URL": "ErpNextFiApi/api/SendEinv/SendEinvContent",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20180206095405",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4d7dd37c-f9b9-4b1a-b8c6-0f98230718e9",
        "API_NAME": "F504 點擊紀錄回傳",
        "ApiDescription": "F504 點擊紀錄回傳",
        "API_URL": "ErpNextSdApi/api/OFCuMine/UpdateClickRecord",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202011241741  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "29f89dbf-5245-4cb7-8fa0-ab3a770a7dbb",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00033525",
            "OwnerCreateTime": "20200703162132",
            "OWNER_NAME": "後勤系統部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "5f5d15b5-5e63-4407-8894-24ce91fe001d",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "後勤系統部-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00033525",
                    "EnvCreateTime": "20200703162132"
                },
                {
                    "OWNER_ENV_TOKEN": "65a5e36e-eb59-46ea-b589-33f4a6145fd2",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "後勤系統部-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00033525",
                    "EnvCreateTime": "20200703162132"
                },
                {
                    "OWNER_ENV_TOKEN": "3a9fb0cf-6562-46db-b129-553b2401a534",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "後勤系統部-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00033525",
                    "EnvCreateTime": "20200703162132"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a911a1bc-0339-465a-867d-15919d120bff",
                "PROJECT_NAME": "聯強物流資料交換",
                "ProjectDescription": "震旦電信與聯強資料交換",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00033525",
                "ProjectCreateTime": "20200703115639"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a8d03503-89e8-4503-9859-0ff223d73676",
        "API_NAME": "後勤系統資料交換測試",
        "ApiDescription": "後勤系統資料交換測試回覆公版",
        "API_URL": "ErpNextMmApi/api/MMDataExchange/TestDataExchange",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033525",
        "ApiCreateTime": "20200703162132",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "960c5daf-2c72-4253-8c17-10808a2c4c83",
        "API_NAME": "PS002-使用折扣(註銷QRCODE)",
        "ApiDescription": "更新官網條碼使用紀錄",
        "API_URL": "/discount/usediscount",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180420182220",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f7af6df7-8aeb-4089-b467-112d01c4c520",
        "API_NAME": "getMapList",
        "ApiDescription": "HP003 地圖列表",
        "API_URL": "ErpNextSdApi/api/OASmCustomerInfo/getMapList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171208000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a34cd9b1-4aac-45ec-b906-139ad2715641",
        "API_NAME": "GetSRImage",
        "ApiDescription": "取得叫修圖片",
        "API_URL": "ErpNextSdApi/api/Image/GetSRImage",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20181029000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b2efaf64-27ad-4817-a2fa-13b0909959c2",
        "API_NAME": "顧客APP產生滿意度問卷寄件檔",
        "ApiDescription": "顧客APP產生滿意度問卷寄件檔",
        "API_URL": "/ErpNextSdApi/api/RemindEvents/QuestionnaireDeliveryList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202012071806  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f1c935df-3054-4854-a168-13f23453a2c5",
        "API_NAME": "BOSS508 退回日報-總經理/處長",
        "ApiDescription": "BOSS508 退回日報-總經理/處長",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/SendBackDailyReport",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183511",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "28ff79fc-5e7c-4af2-ae9d-1693eefcaf09",
        "API_NAME": "BOSS206 訊息設定(已讀/刪除)",
        "ApiDescription": "BOSS206 訊息設定(已讀/刪除)",
        "API_URL": "ErpNextSdApi/api/AuroraBossOverview/UpdateNotification",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191007134233",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00042852",
            "OwnerCreateTime": "20190912181217",
            "OWNER_NAME": "研發部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "28dcceca-8cfe-400c-8d2a-a637321126db",
                "PROJECT_NAME": "研發部共用服務",
                "ProjectDescription": "研發部共用服務",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00037313",
                "ProjectCreateTime": "202012141420  "
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "288ec375-222d-497b-932c-17091a3f7905",
        "API_NAME": "地址轉經緯度",
        "ApiDescription": "地址轉經緯度",
        "API_URL": "ErpNextSdApi/api/QueryAddr/AddrQueryPoint",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "202012141418  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9c4dfbf8-86d5-49e1-afbd-171c4208bdfe",
        "API_NAME": "F003 簡訊驗證結果(回傳官網網址)",
        "ApiDescription": "F003 簡訊驗證結果(回傳官網網址)",
        "API_URL": "ErpNextSdApi/api/OFCuMemberAccount/GetOTPResult",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010241405  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "71da3a32-a18b-41d5-8a0c-178d04b4d7d9",
        "API_NAME": "HP304 更新有需求內容",
        "ApiDescription": "HP304-更新有需求內容",
        "API_URL": "ErpNextSdApi/api/HopePond/UpdateDemandContent",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cabaa561-a54a-4cf6-895c-186eafe8f897",
        "API_NAME": "F111 風格問卷留言",
        "ApiDescription": "風格問卷留言",
        "API_URL": "ErpNextSdApi/api/OFCuQuestionnaire/QuestionnaireMessage",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202010261706  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "87c1665b-b966-48bc-8c5d-18a5d29b852d",
        "API_NAME": "B03002",
        "ApiDescription": "事務機印量計張回報",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/updatePrintReport",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180918000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "30e3f6dd-d04d-4f13-8a5a-18ca8075f51c",
        "API_NAME": "getReceiptList",
        "ApiDescription": "DI015-購買紀錄",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getReceiptList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171127000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d9331e9e-58a5-4ce6-aa22-1947a93ce8f2",
        "API_NAME": "B03003",
        "ApiDescription": "查詢事務機印量資訊",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getPrintInfo",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "425596fa-e304-4314-925e-194aee86e68b",
        "API_NAME": "BOSS403取得KPI -市場-台數",
        "ApiDescription": "BOSS403取得KPI -市場-台數",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetMarketStock",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164825",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "362484f8-3fcb-4064-940c-19aa0dd5661b",
        "API_NAME": "取得配件清單",
        "ApiDescription": "EQ031-取得配件清單",
        "API_URL": "ErpNextSdApi/api/Equipment/GetAttachList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8e7ad6c4-b648-4cd8-b1da-19edff9872a9",
        "API_NAME": "BOSS405取得KPI -人力",
        "ApiDescription": "BOSS405取得KPI -人力",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetHumanOutput",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905165015",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "5ddb720c-bfcc-45ba-a9c1-19ef3a10f001",
        "API_NAME": "Login_TEST",
        "ApiDescription": "Login_TEST",
        "API_URL": "TestSDApi/api/HummanResource/Login",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20180821000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "cc12e9f3-6b52-45b4-b33b-80cc1c95474a",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00044678",
            "OwnerCreateTime": "20180928110327",
            "OWNER_NAME": "夏普(SHARP)",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "dac715a6-4cfb-423e-941b-cf4320e4a609",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "",
                    "EnvDescription": "夏普-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00044678",
                    "EnvCreateTime": "20180928110327"
                },
                {
                    "OWNER_ENV_TOKEN": "e8f619f9-eb98-4654-a48b-efa1e4731656",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "",
                    "EnvDescription": "夏普-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00044678",
                    "EnvCreateTime": "20180928110327"
                },
                {
                    "OWNER_ENV_TOKEN": "e7a4906b-4529-42ef-a079-f72f8cb184cb",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "",
                    "EnvDescription": "夏普-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00044678",
                    "EnvCreateTime": "20180928110327"
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "dd45019f-cc74-4a4c-bbdc-1a1076cdfd41",
        "API_NAME": "OD001-更新訂單資訊",
        "ApiDescription": "由夏普方發出更新訂單資訊，再由震旦API接收",
        "API_URL": "ErpNextSdApi/api/SharpTranOrderInfo/UpdateOrderInfo",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044678",
        "ApiCreateTime": "20180928110327",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "75e5f7c6-e56a-47ff-a194-1a742e97eec9",
        "API_NAME": "顧客APP推播通知",
        "ApiDescription": "顧客APP推播通知",
        "API_URL": "ErpNextSdApi/api/RemindEvents/SendCuAppNotification",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202011301734  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "58cd4b6a-200e-41c8-952d-1ac90c04212c",
        "API_NAME": "BOSS102用TOKEN登入",
        "ApiDescription": "BOSS102 用TOKEN登入",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/LoginToken",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20190822113432",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "74531eb5-f3b3-421d-81cd-1ad2316ee99b",
        "API_NAME": "BOSS408取得KPI -服務-簽約",
        "ApiDescription": "BOSS408取得KPI -服務-簽約",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiSign",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905165015",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "28ece803-cf3c-49c4-8c65-1b390e032918",
        "API_NAME": "updateCourseMail",
        "ApiDescription": "DI019 寄送黃卡",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/updateCourseMail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171204000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "850060ed-d9dc-47b1-a408-1b42d4b2d84d",
        "API_NAME": "B02003",
        "ApiDescription": "寄送電子發票",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getElectronicInvoice",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e4cfbf8c-f12f-421a-b05e-1bfd53de9d7f",
        "API_NAME": "EQ102 取得商品庫存篩選清單",
        "ApiDescription": "EQ102-取得商品庫存篩選清單",
        "API_URL": "ErpNextSdApi/api/Equipment/GetInventoryByItem",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e612c38b-449c-4f24-8deb-1c5a4417f23d",
        "API_NAME": "[F314] 新增/刪除留言、新增電子簽名",
        "ApiDescription": "ErpNextSdApi/api/OFCuCase/GetMessageEdit",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetMessageEdit",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202011051642  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fb1789c2-9a2e-467a-8b39-1cb3f2512afb",
        "API_NAME": "A01002",
        "ApiDescription": "網站資訊",
        "API_URL": "ErpNextSdApi/api/OACuHome/getAdList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "df6f93ad-a976-4b79-ab41-1daeef45b0df",
        "API_NAME": "getSort",
        "ApiDescription": "HP112 顧客排序方式列表",
        "API_URL": "ErpNextSdApi/api/OASmCustomerInfo/getSort",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171208000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ecbe0a91-cd47-4b73-a681-1dee07ba83a6",
        "API_NAME": "F503 移除用戶權限",
        "ApiDescription": "F503 移除用戶權限",
        "API_URL": "ErpNextSdApi/api/OFCuMine/UpdateRemoveAccount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202011021340  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0ee8fa8c-3a2d-4538-b74a-1ea8454697c4",
        "API_NAME": "[F301] 發票查詢",
        "ApiDescription": "取得顧客發票",
        "API_URL": "ErpNextSdApi/api/OFCuService/GetInvoiceInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "202010201135  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9539627f-876e-4154-a1c0-1edd2b5a23c8",
        "API_NAME": "F103 預設搜尋文字",
        "ApiDescription": "F103 預設搜尋文字",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetSearchHint ",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010051316  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d057455a-482b-4134-8148-1ee3e8d27bb6",
        "API_NAME": "BOSS404取得KPI -市場-簽約",
        "ApiDescription": "BOSS404取得KPI -市場-簽約",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetMarketSign",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164832",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "05d48c63-3906-46b5-9592-2031fe16ef5b",
        "API_NAME": "M01005",
        "ApiDescription": "取得機器相關資訊",
        "API_URL": "ErpNextSdApi/api/OACuMember/getMachineInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f6571bee-787e-41ff-9f38-212aad911510",
        "API_NAME": "F401 聯絡震旦",
        "ApiDescription": "聯絡震旦",
        "API_URL": "ErpNextSdApi/api/OFCuContactAurora/PostShowRoomList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202010261707  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4f80bc5d-b57f-4af0-b847-2132b4710bfd",
        "API_NAME": "B04002",
        "ApiDescription": "服務歷程 回傳事務機服務歷程",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getMachineServeProcess",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180918000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "df8988cb-8ebb-44d7-8ea5-22e7e77f0c52",
        "API_NAME": "BOSS402取得KPI -市場-業績",
        "ApiDescription": "BOSS402取得KPI -市場-業績",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetMarketSales",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164921",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "453c8b0c-bfeb-47d4-a391-2315e975dd4f",
        "API_NAME": "BOSS105 取得事業部、處別及部門清單",
        "ApiDescription": "BOSS105 取得事業部、處別及部門清單(依據角色給予不同的預設組織)",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/GetDataOrgList2",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00030566",
        "ApiCreateTime": "20191111180335",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "60ffba24-3ca4-4eae-ad5f-231b4ca9f516",
        "API_NAME": "getReceiptDetails",
        "ApiDescription": "DI016-購買紀錄詳細內容",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getReceiptDetails",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171127000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ddc53206-a4b6-4cd5-9462-2345cdab18cb",
        "API_NAME": "getDispatchList",
        "ApiDescription": "DI001-取得派工單/行程清單",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getDispatchList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "bb950b0b-8ca9-4b9c-a371-257a9fb0aec6",
        "API_NAME": "BOSS714營業活動顧客列表 ",
        "ApiDescription": "BOSS714營業活動顧客列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetBusinessActivityCustomerList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162140",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "687ccfed-57fc-4b6e-8595-25de5c7abd7f",
        "API_NAME": "BOSS715營業活動排名表",
        "ApiDescription": "BOSS715營業活動排名表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetBusinessActivityRanking",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162244",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1eb9687b-95ae-4e91-a218-25f3c8c76e1f",
        "API_NAME": "EQ002 取得推銷機型詳細資料",
        "ApiDescription": "EQ002-取得推銷機型詳細資料",
        "API_URL": "ErpNextSdApi/api/Equipment/GetPromoDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "Authorization",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0b10681a-126f-47e7-a4eb-2747b94cfec6",
        "API_NAME": "行動簽核 WebView -取得單據",
        "ApiDescription": "主管 App 行動簽核\nWebView 取得單據內容",
        "API_URL": "ErpNextAdApi/api/mobile/MGMDGetDoc/{id}",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036333",
        "ApiCreateTime": "20190903091458",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "192aa7b9-f7f2-4361-b4b0-27c7c53c2718",
        "API_NAME": "BOSS703取得顧客卡片",
        "ApiDescription": "BOSS703取得顧客卡片",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerCard",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "25ad240f-5813-4ee7-adc4-27fd4cb87e2e",
        "API_NAME": "M04002",
        "ApiDescription": "訊息設定(已讀/刪除)",
        "API_URL": "ErpNextSdApi/api/OACuMe/updateNotifySet",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20181109000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e6538fd8-999e-4c2b-9987-28002fbd4e4f",
        "API_NAME": "F113 訊息中心列表+詳情",
        "ApiDescription": "F113 訊息中心列表+詳情",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetNotifyList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202009231458  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e765c681-65e3-4dfe-ab41-28192cc12fc8",
        "API_NAME": "F002 查詢綁定會員資料",
        "ApiDescription": "F002 查詢綁定會員資料",
        "API_URL": "ErpNextSdApi/api/OFCuMemberAccount/GetAppMemberInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010241406  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "7d2c7519-f46a-4e86-a06f-28c2d191bdf1",
        "API_NAME": "A01003",
        "ApiDescription": "記錄APP使用者手機資訊",
        "API_URL": "ErpNextSdApi/api/OACuHome/updateMobileInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20181025000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            },
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f90025b0-75aa-4e5c-9a86-2a1abd8f96fc",
        "API_NAME": "GetCP010Image",
        "ApiDescription": "取得訊息中心照片",
        "API_URL": "ErpNextSdApi/api/Image/GetCP010Image",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20181108172327",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 2
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f7cf4685-39ca-4384-b618-2a216d4221bd",
        "API_NAME": "BOSS412取得KPI -利潤-商品別毛利",
        "ApiDescription": "BOSS412取得KPI -利潤-商品別毛利",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiProduct",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905165015",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8630e956-a11f-46df-aad8-2a28643b10fd",
        "API_NAME": "M01002",
        "ApiDescription": "查詢綁定會員資訊(含點數)",
        "API_URL": "ErpNextSdApi/api/OACuMember/getMemberInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b7f8f08d-8633-4cb1-a7ec-2a4371aca764",
        "API_NAME": "BOSS411取得KPI -利潤-損益",
        "ApiDescription": "BOSS411取得KPI -利潤-損益",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiProfit",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164825",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1f29e344-cb26-4428-98e6-2a64feaa8de2",
        "API_NAME": "getBindingAccount",
        "ApiDescription": "DI025-綁定帳號列表",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getBindingAccount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20181107084700",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a4ec166c-8a31-43c4-acac-2a74b5d5f2a0",
        "API_NAME": "MC101 傳送意見反應",
        "ApiDescription": "MC101-傳送意見反應",
        "API_URL": "ErpNextSdApi/api/MyCenter/SendFeedBack",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4727d2c2-559e-48ad-bdf2-2ae254b3888a",
        "API_NAME": "getIOTList",
        "ApiDescription": "MC013-IOT訊息列表",
        "API_URL": "ErpNextSdApi/api/OASmMyCenter/getIOTList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b90957f8-34ba-418c-8dbd-2de2fe1ba92b",
        "API_NAME": "SE012 取得行事曆細節",
        "ApiDescription": "SE012-取得行事曆細節",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/GetDetailCalendar",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f87584e5-6bb4-415e-baa4-2e07137e15f1",
        "API_NAME": "BOSS406取得KPI -服務-叫修",
        "ApiDescription": "BOSS406取得KPI -服務-叫修",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiRepair",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905165015",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00042852",
            "OwnerCreateTime": "20190912181217",
            "OWNER_NAME": "研發部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d3c4a12f-c663-4939-aa0f-2e5b6e159064",
        "API_NAME": "統批服務日報",
        "ApiDescription": "統批服務日報",
        "API_URL": "ErpNextAdApi/api/mobile/MDUploadSMCKDoc",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "20200304150953",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "667a8a94-9175-4876-9bdf-2f06589feb32",
        "API_NAME": "BOSS101用帳密登入",
        "ApiDescription": "BOSS101用帳密登入",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/Login",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20190822113432",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "876a8aea-b1e9-40d7-a5a3-2f1c96913983",
        "API_NAME": "updateAdvancedSettin",
        "ApiDescription": "DI024-更新帳號狀態(進階帳號設定)",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/updateAdvancedSetting",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20181107084500",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "877501ef-7872-42f1-8d66-2fac1071afcc",
        "API_NAME": "H01002",
        "ApiDescription": "新增/修改報修內容(類別、說明及照片)",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/insertMaintainOrder",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2e1102b5-d22f-4d03-8795-30f1325d99c5",
        "API_NAME": "P03002",
        "ApiDescription": "最新消息列表讀取狀態回傳",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/updateNews",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20181004000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f0f12b07-d7f0-4c1d-aa35-31337beed29c",
        "API_NAME": "[F308] 事件篩選類別",
        "ApiDescription": "[F308] 事件篩選類別",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetEventType",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202010261811  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "89e5d51e-70ba-4c76-b968-3143c0eebe43",
        "API_NAME": "HP302 取得有需求清單",
        "ApiDescription": "HP302-取得有需求清單",
        "API_URL": "ErpNextSdApi/api/HopePond/GetDemandList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "93ff3011-da7c-4475-ade4-326f4fd27c1f",
        "API_NAME": "BOSS407取得KPI -服務-保養",
        "ApiDescription": "BOSS407取得KPI -服務-保養",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiMainteance",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164921",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4ed87f4f-7474-4aa2-8a30-327c1423dcec",
        "API_NAME": "HELLO BOSS共用異常推播提醒",
        "ApiDescription": "HELLO BOSS共用異常推播提醒",
        "API_URL": "ErpNextSdApi/api/RemindEvents/BossRemindEvents",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191205174500",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0b239c28-fff9-4cf0-a130-357fb23b74c6",
        "API_NAME": "getServiceDetail",
        "ApiDescription": "DI009-取得服務內容",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getServiceDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fc60dc1d-1856-4f26-a9ad-3659dc022edf",
        "API_NAME": "BOSS702選擇顧客-篩選結果",
        "ApiDescription": "BOSS702選擇顧客-篩選結果",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903161655",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "83f6f085-84b3-4364-8b35-37979e29914f",
        "API_NAME": "P04003 商品資訊",
        "ApiDescription": "P04003 商品資訊",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getCommodityInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200706093129",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "60f261db-4c47-4e33-8f9f-3814936ba347",
        "API_NAME": "updateIOTListRead",
        "ApiDescription": "MC016-全部讀取IOT訊息API",
        "API_URL": "ErpNextSdApi/api/OASmMyCenter/updateIOTListRead",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "df7103f7-dfa3-4c3d-a633-3989f2862019",
        "API_NAME": "MC011 取得訊息中心清單",
        "ApiDescription": "MC011-取得訊息中心清單",
        "API_URL": "ErpNextSdApi/api/MyCenter/GetNotifyList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "43cc7df6-6d83-4fdb-8172-3a00bcb6194d",
        "API_NAME": "BOSS301行事曆取得區間內種類總數列表",
        "ApiDescription": "BOSS301行事曆取得區間內種類總數列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCalendar/GetDataScheduleList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033525",
        "ApiCreateTime": "20190905164516",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4f844568-87a1-461e-a3a1-3a2666fe3f26",
        "API_NAME": "B03001",
        "ApiDescription": "事務機最新資訊 (黑白/彩色 & 碳粉剩餘量 、可回全部印量、印表機最近一次服務資訊 )",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getMachineInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b4727706-9306-48fc-8a09-3a4bcf901168",
        "API_NAME": "GetAPPACCOUNTImage",
        "ApiDescription": "取得顧客APP帳號照片",
        "API_URL": "ErpNextSdApi/api/Image/GetAPPACCOUNTImage",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20181017000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00038832",
            "OwnerCreateTime": "20181121100211",
            "OWNER_NAME": "魁亨ALL",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f664367e-3057-416f-910a-63a4cda91bba",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                    "EnvDescription": "魁亨ALL測試EDU",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                },
                {
                    "OWNER_ENV_TOKEN": "41ed9b91-3747-4397-9d61-6919be39b458",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://119.81.165.141/aurora_api/api",
                    "EnvDescription": "魁亨ALL正式SYS",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                },
                {
                    "OWNER_ENV_TOKEN": "2892b3be-9a5c-4df7-a59d-89638b179167",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                    "EnvDescription": "魁亨ALL測試IT",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "bd0cf126-7d2b-4ba2-835f-3a5b779ad8c6",
        "API_NAME": "PS009-取得官網menu架構",
        "ApiDescription": "取得官網menu架構",
        "API_URL": "/site/getmenutree",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181121100730",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "38890ef5-2eaf-4e09-9bd9-3aa2a91b2c03",
        "API_NAME": "SE112 取得基本參數",
        "ApiDescription": "SE112-取得基本參數",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/GetBaseParameter",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171020000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8b049d6b-c892-41b2-95ae-3ddeb55b9988",
        "API_NAME": "A01004APP版本確認",
        "ApiDescription": "A01004APP版本確認",
        "API_URL": "ErpNextSdApi/api/OACuHome/GetAppVersion",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191126102050",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "29e815bb-e857-4fbc-aa67-3dff06acd3b1",
        "API_NAME": "BOSS410取得KPI -資金-庫存",
        "ApiDescription": "BOSS410取得KPI -資金-庫存",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiStock",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905165015",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "178169f4-2cf1-43e0-a866-3f2735e5c4ed",
        "API_NAME": "BOSS102 取得同仁/組別/部門/處別清單",
        "ApiDescription": "BOSS102-取得同仁/組別/部門/處別清單",
        "API_URL": "ErpNextSdApi/api/HummanResource/GetOrganizationList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20180223191645",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "05a46ec0-97fe-4174-8d59-3fb40f5cc2c2",
        "API_NAME": "F108 首頁",
        "ApiDescription": "F108 首頁",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetExplore",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010051320  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "773c3886-46a0-4e22-add6-4003be653097",
        "API_NAME": "H01003",
        "ApiDescription": "取消報修及叫耗材訂單",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/updateOrder",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "88df76fe-6326-4ea0-870b-40cb34c0af9b",
        "API_NAME": "SE001 取得行事曆清單",
        "ApiDescription": "SE001-取得行事曆清單",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/GetList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "36713880-245c-49ca-b690-40fa23ff2368",
        "API_NAME": "P04007 送出顧客需求單",
        "ApiDescription": "P04007 送出顧客需求單",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/insertCustomerNeeds",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200706093129",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "870b7b15-26e2-48c7-89ad-410ac825e339",
        "API_NAME": "getReceiptList",
        "ApiDescription": "DI015-購買紀錄-new",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getReceiptListNew",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20180724000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "be0e44fc-c0a9-413a-b5d0-42da0d510bcb",
        "API_NAME": "BOSS501 取得日報詳情-單位主管/總經理/處長",
        "ApiDescription": "BOSS501 取得日報詳情-單位主管/總經理/處長",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/GetDailyReportContnet",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183229",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cc9e3ae6-deb4-4e87-aef0-439cbce25703",
        "API_NAME": "getCustomerList",
        "ApiDescription": "HP001 取得顧客列表",
        "API_URL": "ErpNextSdApi/api/OASmCustomerInfo/getCustomerList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171208000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "7801e114-3316-4ae0-b443-43eb31523e25",
        "API_NAME": "P04004 是否下單導向不同指定頁面",
        "ApiDescription": "P04004 是否下單導向不同指定頁面",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getUrlRedirection",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200706093129",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ab648611-1766-40a5-8f80-440baaeeca66",
        "API_NAME": "B02002",
        "ApiDescription": "發票費用明細(應繳金額明細)",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getInvoiceDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00042852",
            "OwnerCreateTime": "20190912181217",
            "OWNER_NAME": "研發部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "44f65f73-9f40-4df1-8753-4543b583edff",
        "API_NAME": "BOSS204 取得簽呈的程式分類與數量-主管App",
        "ApiDescription": "供主管App取得簽上癮的簽核單據依照程式分類與統計總數。",
        "API_URL": "ErpNextAdApi/api/MobileApprovalAddiction/ApprovalClassifyCount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190912181217",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a9338217-5ace-46f0-8982-4555cd502de4",
        "API_NAME": "BOSS706顧客資料-活動列表",
        "ApiDescription": "BOSS706顧客資料-活動(服務歷程與拜訪紀錄)列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerActivity",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162244",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "136c7e59-2d6c-43c2-afe4-462534198b4c",
        "API_NAME": "M02001",
        "ApiDescription": "單一帳號解除綁定",
        "API_URL": "ErpNextSdApi/api/OACuMe/updateUnbindAccount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b1c75876-d8a9-403e-8ba3-46c437e9c6a9",
        "API_NAME": "行事曆提醒事項取得逾期帳款明細資料",
        "ApiDescription": "行事曆提醒事項取得逾期帳款明細資料\nWebView顯示使用",
        "API_URL": "ErpNextSdApi/api/AuroraBossCalendar/GetOverdueAccount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033525",
        "ApiCreateTime": "20191127112505",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "b35c36e3-690e-42b7-86f2-c802b07d25bc",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "VC004646",
            "OwnerCreateTime": "20191231163233",
            "OWNER_NAME": "契约锁",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "db205ddf-3315-412e-b13e-b54b0a3ee86a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://47.103.123.61:9182",
                    "EnvDescription": "契约锁主站",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VC004646",
                    "EnvCreateTime": "20191231163547"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "6182e408-6677-40df-b8b0-7287d77aea46",
                "PROJECT_NAME": "大陆契约锁专案",
                "ProjectDescription": "大陆契约锁(QIYUESUO)合同用印专案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "VC004646",
                "ProjectCreateTime": "20191231162117"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c32f350e-8b3a-450f-8a30-4798fd65a810",
        "API_NAME": "创建合同文件",
        "ApiDescription": "用既有合同模板创建合同文件",
        "API_URL": "/document/createbytemplate",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "VC004646",
        "ApiCreateTime": "20191231163547",
        "EduCount": 0,
        "ItCount": 1,
        "SysCount": 0,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "3f2cdcac-626b-4a38-a386-47b95ae712c0",
        "API_NAME": "BOSS304-取得行程列表",
        "ApiDescription": "從行事曆總覽中取得行程列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCalendar/GetScheduleListData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046455",
        "ApiCreateTime": "20190909180716",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ef97b883-8bfe-4507-82a9-4aade6a4b357",
        "API_NAME": "BOSS712顧客360營業活動",
        "ApiDescription": "BOSS712顧客360營業活動",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerBusinessActivities",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162244",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "738dfed0-c369-4eaf-ae76-4b4c358505a9",
        "API_NAME": "getIOTDetail",
        "ApiDescription": "MC014-IOT詳細內容",
        "API_URL": "ErpNextSdApi/api/OASmMyCenter/getIOTDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f4842da1-fe9a-4bb3-b325-4bc009881462",
        "API_NAME": "B02001",
        "ApiDescription": "發票費用明細列表( Search By 計張/耗材/機器 - 時間 )",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getInvoiceDetailList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00042852",
            "OwnerCreateTime": "20190912181217",
            "OWNER_NAME": "研發部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f818a408-7d06-47be-be57-4c12e90b507f",
        "API_NAME": "BOSS203 取得簽呈列表-主管App",
        "ApiDescription": "供主管App取得簽上癮的簽呈列表，包含對象的所有實虛帳號單據",
        "API_URL": "ErpNextAdApi/api/MobileApprovalAddiction/ApprovalList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190912181217",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "39ffd330-5a4c-4680-a34c-4c7eafc5cbef",
        "API_NAME": "P03001",
        "ApiDescription": "最新消息列表",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getLatestNews",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1aa6f28c-8a68-4666-86bd-4c84e282bf26",
        "API_NAME": "SE210 刪除行事曆 (含會議/待辦)",
        "ApiDescription": "SE210-刪除行事曆 (含會議/待辦)",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/Delete",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9d4f5f40-f827-4133-b87b-4d117ab2f778",
        "API_NAME": "EQ201 新增/編輯顧客現有設備",
        "ApiDescription": "EQ201-新增/編輯顧客現有設備",
        "API_URL": "ErpNextSdApi/api/Equipment/UpdateExisted",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "3a5c6829-1716-40cb-956b-4d4a6929d8e2",
        "API_NAME": "getFaultProblemList",
        "ApiDescription": "SM001 故障問題清單",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/getFaultProblemList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6c80977a-d330-4512-9414-4dd61b18cb3c",
        "API_NAME": "EQ202 新增/編輯顧客推銷機型",
        "ApiDescription": "EQ202-新增/編輯顧客推銷機型",
        "API_URL": "ErpNextSdApi/api/Equipment/UpdatePromo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2c70fb94-4966-4218-9f04-4e9404a3a696",
        "API_NAME": "MC301 取得考勤內容",
        "ApiDescription": "MC301-取得考勤內容",
        "API_URL": "ErpNextHrApi/api/MyCenter/GetClockinContent",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00042852",
            "OwnerCreateTime": "20190912181217",
            "OWNER_NAME": "研發部服務",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                },
                {
                    "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00042852",
                    "EnvCreateTime": "20190912181217"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "28dcceca-8cfe-400c-8d2a-a637321126db",
                "PROJECT_NAME": "研發部共用服務",
                "ProjectDescription": "研發部共用服務",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00037313",
                "ProjectCreateTime": "202012141420  "
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2af03133-ab14-4585-9b8b-4f1374ff2d5f",
        "API_NAME": "經緯度轉地址",
        "ApiDescription": "經緯度轉地址",
        "API_URL": "ErpNextSdApi/api/QueryAddr/PointQueryAddr",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "202012141419  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ba0f18a7-730d-40b0-b2f2-4f1edfd0b637",
        "API_NAME": "CD011 取得附近顧客(加標籤)",
        "ApiDescription": "CD011-取得附近顧客(加標籤)",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetListNearByBuilduing",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "727cf592-26d5-471d-801a-4f33493e335f",
        "API_NAME": "F103 預設搜尋文字",
        "ApiDescription": "F103 預設搜尋文字",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetSearchHint ",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010051317  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "85cfe6c8-11ed-4839-a5bf-4f369abd63c6",
        "API_NAME": "SE122 設置待辦處理狀態",
        "ApiDescription": "SE122-設置待辦處理狀態",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/SetEventStatus",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "eda5e5d8-d7af-4bb3-a2da-4f4405af2bb9",
        "API_NAME": "getCustomerList",
        "ApiDescription": "DI012-取得顧客列表",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getCustomerList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "034427a4-a810-4b3a-9be2-4f9ed00379d2",
        "API_NAME": "HR002 TOKEN登入",
        "ApiDescription": "HR002-TOKEN登入",
        "API_URL": "ErpNextSdApi/api/HummanResource/LoginToken",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "815666e8-34d7-4a18-bb54-51dd9fd21686",
        "API_NAME": "PS007-取得會員及紅利歷程資料",
        "ApiDescription": "取得會員及紅利歷程資料",
        "API_URL": "/case/getmemberinfos",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044678",
        "ApiCreateTime": "20180621110714",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d1cb8bbf-8c62-484d-8493-52a24f8920b4",
        "API_NAME": "PS004-使用紅利",
        "ApiDescription": "扣抵會員點數",
        "API_URL": "/discount/usebonus",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180424104033",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "db743d74-0dcb-4b64-86fc-5302049568ac",
        "API_NAME": "SE203 新增/編輯待辦與會議",
        "ApiDescription": "SE203-新增/編輯待辦與會議",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/UpdateEvent",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00038832",
            "OwnerCreateTime": "20181121100211",
            "OWNER_NAME": "魁亨ALL",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "f664367e-3057-416f-910a-63a4cda91bba",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                    "EnvDescription": "魁亨ALL測試EDU",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                },
                {
                    "OWNER_ENV_TOKEN": "41ed9b91-3747-4397-9d61-6919be39b458",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://119.81.165.141/aurora_api/api",
                    "EnvDescription": "魁亨ALL正式SYS",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                },
                {
                    "OWNER_ENV_TOKEN": "2892b3be-9a5c-4df7-a59d-89638b179167",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                    "EnvDescription": "魁亨ALL測試IT",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00038832",
                    "EnvCreateTime": "20181121100439"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b01ee04d-6b31-4828-b3cd-53d5834b59e8",
        "API_NAME": "PS011-取得官網瀏覽軌跡",
        "ApiDescription": "取得官網瀏覽軌跡",
        "API_URL": "/site/gettracelog",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181121100730",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d1b104d2-f7e3-4433-b754-541f7fd97e33",
        "API_NAME": "BOSS721 營業需求單--改派單位",
        "ApiDescription": "BOSS721 營業需求單--改派單位",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/UpdateReassignmentDepartment",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20190912094716",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ad4416b6-1a92-47e2-ac98-54441bb18c4d",
        "API_NAME": "BOSS711顧客360需求單",
        "ApiDescription": "BOSS711顧客360需求單",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerDemandList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b89d7ebc-2fcb-474d-a3ec-545356e63410",
        "API_NAME": "[F311] 事件內頁資訊",
        "ApiDescription": "ErpNextSdApi/api/OFCuCase/GetEventDetail",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetEventDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202011051639  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "16a17d69-85a6-4e15-a68a-550d8aa54d6f",
        "API_NAME": "HP201 設置重點關心狀態",
        "ApiDescription": "HP201-設置重點關心狀態",
        "API_URL": "ErpNextSdApi/api/HopePond/SetSatausFocus",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e84fbe4c-49b6-4f20-bd50-57ce2fb6916c",
        "API_NAME": "BOSS604\t庫存查詢-選擇分類",
        "ApiDescription": "BOSS604\t庫存查詢-選擇分類",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/GetInventoryModels",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191007113501",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4f704405-8e18-462f-9180-5845ae7c0478",
        "API_NAME": "GetFile",
        "ApiDescription": "下載倉儲檔案",
        "API_URL": "ErpNextSdApi/api/Image/GetFile",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191104095701",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d3472f4b-433a-4550-8272-592cebd04bdb",
        "API_NAME": "GetCompList",
        "ApiDescription": "CU001-取得顧客所在事業部列表",
        "API_URL": "ErpNextSdApi/api/OAOfficialSite/GetCompList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "20170419000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "30fb6a71-807c-4e17-be78-59accf3debf5",
        "API_NAME": "BOSS112 取消代理人",
        "ApiDescription": "BOSS112 取消代理人",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/CancelAgentData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905184240",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0f0344e3-84c3-4d5b-9e0e-5a7c7a2e638f",
        "API_NAME": "[F112] 型錄列表",
        "ApiDescription": "[F112] 型錄列表",
        "API_URL": "ErpNextSdApi/api/OFCuCatalog/GetCatelogList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "202009241833  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a528ccd4-2c18-4f17-9878-5ac9acf237ad",
        "API_NAME": "HP306 取得有需求活動歷程",
        "ApiDescription": "HP306-取得有需求活動歷程",
        "API_URL": "ErpNextSdApi/api/HopePond/GetDemandVisitList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e00e35ca-c42c-4d2f-9dc2-5b58ddcad0d9",
        "API_NAME": "BOSS801 點擊紀錄回傳",
        "ApiDescription": "BOSS801 點擊紀錄回傳",
        "API_URL": "ErpNextSdApi/api/AuroraBossOther/ClickRecord",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191023095402",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2404c66b-bf65-4bad-9846-5bf171f63b61",
        "API_NAME": "[F302] 電子發票(已付款/待付款/可繳費)",
        "ApiDescription": "取得發票明細",
        "API_URL": "ErpNextSdApi/api/OFCuService/GetInvoiceDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "202010201136  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "127ef38e-f8ac-40b2-9029-5d122d2efd76",
        "API_NAME": "M03001",
        "ApiDescription": "事務機名稱更新",
        "API_URL": "ErpNextSdApi/api/OACuMe/updateMachineNam",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "09399e21-7b1a-43c0-9429-5f04866ce5da",
        "API_NAME": "SE202 新增/編輯拜訪",
        "ApiDescription": "SE202-新增/編輯拜訪",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/UpdateVisit",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fb92a9f3-eb79-4c9b-a240-5f5272db8b02",
        "API_NAME": "BOSS205 通知訊息列表+內容",
        "ApiDescription": "BOSS205 通知訊息列表+內容",
        "API_URL": "ErpNextSdApi/api/AuroraBossOverview/GetNotificationList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191007133920",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2008e612-49dd-4aff-a6f2-5f92f08f1179",
        "API_NAME": "receiveDispatchList",
        "ApiDescription": "DI008-接受/轉寄派工單",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/receiveDispatchList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f527821d-4baf-4515-ad06-6060aa3afcad",
        "API_NAME": "CD001 取得顧客清單",
        "ApiDescription": "CD001-取得顧客清單",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "822ea0f0-672a-4a9f-bc41-610e22dfc0b4",
        "API_NAME": "BOSS502 新增拜訪紀錄",
        "ApiDescription": "BOSS502 新增拜訪紀錄",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/insertDailyReport",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183511",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f433abc8-da52-4707-bb6f-61586aaa32b5",
        "API_NAME": "F107 圖文和商品列表內容",
        "ApiDescription": "F107 圖文和商品列表內容",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetProductList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200921114646",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "07477c82-4b64-4d13-8ea1-621d0df3953a",
        "API_NAME": "SE222 新增/編輯拜訪推銷機型",
        "ApiDescription": "SE222-新增/編輯拜訪推銷機型",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/UpdateVisitPromo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e46fcce8-a54f-45bb-ba48-62f5b5aaa2f2",
        "API_NAME": "推播通知",
        "ApiDescription": "推播通知",
        "API_URL": "ErpNextSdApi/api/RemindEvents/RemindAll",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191111135918",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1bc2fd3e-b499-4746-b977-630725ba866f",
        "API_NAME": "BOSS414取得KPI -排名表下拉選單",
        "ApiDescription": "BOSS414取得KPI -排名表下拉選單",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiDropMenuList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905172759",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a60d0873-2204-4eca-ba9f-638968c8c4e0",
        "API_NAME": "[F313] 事件內頁留言區",
        "ApiDescription": "ErpNextSdApi/api/OFCuCase/GetEventMessage",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetEventMessage",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202011051642  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "53902b94-5ddf-4457-ba99-6389bc748f0d",
        "API_NAME": "BOSS201 總覽",
        "ApiDescription": "BOSS201 總覽",
        "API_URL": "ErpNextSdApi/api/AuroraBossOverview/GetOverview",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20190902140113",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "008d64b3-8b92-45a1-82b0-63902d8f8a8c",
        "API_NAME": "P04002",
        "ApiDescription": "促銷優惠詳細頁",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getEdmHtmlTag",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "34be666d-3ed9-449c-bd95-63a8aa318741",
        "API_NAME": "HP021 取得EDM詳細資訊",
        "ApiDescription": "HP021-取得EDM詳細資訊",
        "API_URL": "ErpNextSdApi/api/HopePond/GetEDMDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171128000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9fecee5d-486c-4a3a-af66-64859677684b",
        "API_NAME": "BOSS103 取得同仁清單",
        "ApiDescription": "BOSS103 取得同仁清單",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/GetDataEmpList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905184240",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f4b35920-db09-4076-8698-64e5e7f4d642",
        "API_NAME": "BOSS607\t庫存狀況",
        "ApiDescription": "BOSS607\t庫存狀況",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/GetInventoryByDepartmentList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191007113501",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "77235304-d4a4-4ed9-aa2d-65c8841c50ac",
        "API_NAME": "SE011 取得拜訪細節",
        "ApiDescription": "SE011-取得拜訪細節",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/GetDetailVisit",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "3ddd25d8-2fff-4723-ae6e-662ec1f4117d",
        "API_NAME": "B03004",
        "ApiDescription": "印量分析查詢(黑白/彩色/日平均印量)",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getAveragePrint",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180918000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1013697d-d39b-4e45-8899-66ef43786007",
        "API_NAME": "BOSS701篩選畫面取得同仁列表",
        "ApiDescription": "BOSS701篩選畫面依處別部門取得同仁列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetEmpnoList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4141a902-6cdc-43c5-aec9-682b3bb7d06a",
        "API_NAME": "MC302 新增考勤紀錄",
        "ApiDescription": "MC302-新增考勤紀錄",
        "API_URL": "ErpNextHrApi/api/MyCenter/UpdateClockin",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "770cddd1-300e-4df1-883d-684a00ff0b3f",
        "API_NAME": "BOSS716營業活動未訪推播 ",
        "ApiDescription": "BOSS716營業活動未訪推播",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetBusinessActivityNotInterviewedBroadcast",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4bfd57a1-f558-4ef7-929c-68b043509a4b",
        "API_NAME": "M01006",
        "ApiDescription": "回覆會員註冊資料",
        "API_URL": "/ErpNextSdApi/api/OACuMember/getMemberSignInInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181114145900",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "7f60cbd2-ee9b-4e55-8d15-69e918346c64",
        "API_NAME": "BOSS305-取得行程內頁",
        "ApiDescription": "從行事曆總覽中取得行程內頁",
        "API_URL": "ErpNextSdApi/api/AuroraBossCalendar/GetCalendarData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046455",
        "ApiCreateTime": "20190909180716",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a0d51018-069f-4027-a59d-69f8e450d845",
        "API_NAME": "保養達成",
        "ApiDescription": "SP003\t保養達成",
        "API_URL": "ErpNextSdApi/api/OASmServicePerformance/getMaintenanceReached",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170725000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "bc056259-5d8b-4f9f-abf2-6b33b363c4f6",
        "API_NAME": "BOSS704顧客資料-基本",
        "ApiDescription": "BOSS704取得顧客基本資料",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903161849",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c04f7989-76e8-4ebe-9b32-6c34e92e6c9f",
        "API_NAME": "BOSS504\t送出已讀批示內容-單位主管",
        "ApiDescription": "BOSS504\t送出已讀批示內容-單位主管",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/updateIsReadComment",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183511",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "VR000316",
            "OwnerCreateTime": "20190604160001",
            "OWNER_NAME": "電子豹",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "2c122575-786b-468f-a4f1-8a86afd1492f",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                },
                {
                    "OWNER_ENV_TOKEN": "acdfa9f1-ad26-4904-8000-9fb977eda9ba",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                },
                {
                    "OWNER_ENV_TOKEN": "cbaf3e27-2cb9-49cc-9327-d006210e8820",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ebb14712-e538-4b18-8f62-38475d39db99",
                "PROJECT_NAME": "OA-EDM合作案",
                "ProjectDescription": "委託外部廠商發EDM，並透過API取得E-mail開啟、廣告點閱等等資訊。",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "VR000316",
                "ProjectCreateTime": "20190624140001"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "x-api-key",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c6d0ad60-15b2-49a3-8d6c-6c5c22cef5f1",
        "API_NAME": "查詢報表連結",
        "ApiDescription": "使用時效key取得所有報表的連結URL",
        "API_URL": "/report/{campaign_sn}/link",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "VR000316",
        "ApiCreateTime": "20190604160001",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fb5dce63-6363-4914-81bc-6c8e52cc71d3",
        "API_NAME": "M06000",
        "ApiDescription": "聯絡我們(回傳回報訊息)",
        "API_URL": "ErpNextSdApi/api/OACuMe/updateContactUs",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "909b6b60-ab19-4706-8be5-6d37730c29f7",
        "API_NAME": "M04001",
        "ApiDescription": "訊息中心詳細頁",
        "API_URL": "ErpNextSdApi/api/OACuMe/getNotifyDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9d7fa818-b16e-41ef-bd36-6d6713bceabe",
        "API_NAME": "[MC304] 上傳頭像圖片",
        "ApiDescription": "[MC304] 上傳頭像圖片",
        "API_URL": "ErpNextSdApi/api/OASdMyCenter/ProfilePic",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20201223182518",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "5cf73110-7f38-4fca-8977-6da30ad3e4aa",
        "API_NAME": "[F315] 附件電子簽名合成",
        "ApiDescription": "ErpNextSdApi/api/OFCuCase/ElectronicSignature",
        "API_URL": "ErpNextSdApi/api/OFCuCase/ElectronicSignature",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202011051644  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2b80ccb7-6e61-46f5-87aa-6de218e0beb9",
        "API_NAME": "EQ103 取得部門庫存清單",
        "ApiDescription": "EQ103-取得部門庫存清單",
        "API_URL": "ErpNextSdApi/api/Equipment/GetInventoryByDepartment",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "98af0492-3763-4d54-b669-6e8656e0cba1",
        "API_NAME": "BOSS723 服務需求單列表",
        "ApiDescription": "BOSS723 服務需求單列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetServiceDemandList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20190912094716",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d8614527-d671-4181-af9d-6f280eecba1c",
        "API_NAME": "MC012 設置訊息已讀",
        "ApiDescription": "MC012-設置訊息已讀",
        "API_URL": "ErpNextSdApi/api/MyCenter/SetNotifyRead",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1e9e99b2-80c0-4f51-9593-6f5e85615297",
        "API_NAME": "BOSS104 取得事業部、處別及部門清單",
        "ApiDescription": "BOSS104 取得事業部、處別及部門清單",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/GetDataOrgList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905184240",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a2ff4115-a77d-4220-9f67-6f9eebcc30b0",
        "API_NAME": "HP111 取得希望之池分類項目",
        "ApiDescription": "HP111-取得希望之池分類項目",
        "API_URL": "ErpNextSdApi/api/HopePond/GetCatalog",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d9aa463f-f9ef-44b0-80cd-70c0ede334d7",
        "API_NAME": "F110 風格問卷結果",
        "ApiDescription": "風格問卷結果",
        "API_URL": "ErpNextSdApi/api/OFCuQuestionnaire/PostResult",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202010261703  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "aa578c67-10b8-4fbf-a20c-713a26589492",
        "API_NAME": "SP003-台數",
        "ApiDescription": "SP003-台數",
        "API_URL": "ErpNextSdApi/api/MyCenter/GetMachinesQty",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00047494",
        "ApiCreateTime": "202012081515  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "259dd6e6-d05b-4720-a319-72de6328c1c1",
        "API_NAME": "F105 圖文列表子分類",
        "ApiDescription": "F105 圖文列表子分類",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetCategoryList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200921114646",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "79ca8e97-5064-4c0b-94a4-733803df3f66",
        "API_NAME": "getCallRepairTime",
        "ApiDescription": "SP002\t叫修時效",
        "API_URL": "ErpNextSdApi/api/OASmServicePerformance/getCallRepairTime",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170725000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e8614e9b-e39d-483c-86fc-739404d971ba",
        "API_NAME": "CD106 取得地址異動檔",
        "ApiDescription": "CD106 取得地址異動檔",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetAddress",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191023175538",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "503587fa-b573-478e-bff4-73ad727b161e",
        "API_NAME": "BOSS113 新增代理人",
        "ApiDescription": "BOSS113 新增代理人",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/InsertAgentData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905184240",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "93e607a3-7a2b-4ba4-a9d2-73d0a9ca97a1",
        "API_NAME": "績效排名",
        "ApiDescription": "SP006\t績效排名",
        "API_URL": "ErpNextSdApi/api/OASmServicePerformance/getPerformanceRanking",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170725000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "534a2bee-8688-406e-992e-74d83d9e083c",
        "API_NAME": "PS006-取消折扣(包含折扣及紅利)",
        "ApiDescription": "取消折扣(包含折扣及紅利)",
        "API_URL": "/discount/canceldiscount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180420182220",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9737bb64-0d7e-45d4-ae92-7571ee3bc5e2",
        "API_NAME": "[F309] 文件夾列表",
        "ApiDescription": "[F309] 文件夾列表",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetFileList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202010261812  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "bc0f13af-22be-4dd2-9bd5-7686a730258f",
        "API_NAME": "PS010-取得文章資料",
        "ApiDescription": "取得文章資料",
        "API_URL": "/site/GetArticleData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "N",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181106114957",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "06d0aca9-e9d8-4d52-978a-77da1fbe3368",
        "API_NAME": "BOSS720 營業需求單--未派 無編號/未派/未訪/已訪",
        "ApiDescription": "BOSS720 營業需求單--未派 無編號/未派/未訪/已訪",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetBusinessDemandUnAssign",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20190912093816",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8b8a6164-45af-48a4-9e4f-78475634cd18",
        "API_NAME": "P04001",
        "ApiDescription": "促銷優惠/EDM列表",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getEdmList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ff1053af-acb4-4cdc-b693-7861361dd974",
        "API_NAME": "BOSS606\t庫存查詢-結果",
        "ApiDescription": "BOSS606\t庫存查詢-結果",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/GetInventoryList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191007113501",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "af65a43b-c2e6-457b-840a-78bd031d33af",
        "API_NAME": "BOSS413取得KPI -排名表(業績/簽約/帳款)",
        "ApiDescription": "BOSS413取得KPI -排名表(業績/簽約/帳款)",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetMarketRank",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905172049",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "29eb1593-bc58-4ae2-be92-7abb2ea58adf",
        "API_NAME": "B01001",
        "ApiDescription": "合約內容",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getContractContent",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4a236128-0375-4d75-8dcb-7d1158ecdd1f",
        "API_NAME": "SE221 新增/編輯拜訪現有設備",
        "ApiDescription": "SE221-新增/編輯拜訪現有設備",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/UpdateVisitExisted",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ee4f613d-4323-4b28-bd64-7da6af57e028",
        "API_NAME": "H02000",
        "ApiDescription": "叫耗材印表機列表+其它商品 紙張/碳粉資訊及單位 取得該事務機上次購買資訊",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/getPurchaseInformation",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "VR000316",
            "OwnerCreateTime": "20190604160001",
            "OWNER_NAME": "電子豹",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "2c122575-786b-468f-a4f1-8a86afd1492f",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                },
                {
                    "OWNER_ENV_TOKEN": "acdfa9f1-ad26-4904-8000-9fb977eda9ba",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                },
                {
                    "OWNER_ENV_TOKEN": "cbaf3e27-2cb9-49cc-9327-d006210e8820",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ebb14712-e538-4b18-8f62-38475d39db99",
                "PROJECT_NAME": "OA-EDM合作案",
                "ProjectDescription": "委託外部廠商發EDM，並透過API取得E-mail開啟、廣告點閱等等資訊。",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "VR000316",
                "ProjectCreateTime": "20190624140001"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "x-api-key",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f66ca595-86bd-4762-b9c0-7e2d0cf06b6a",
        "API_NAME": "匯出報表",
        "ApiDescription": "使用時效key取得所有報表",
        "API_URL": "/report/{campaign_sn}/export",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "VR000316",
        "ApiCreateTime": "20190604160001",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "97a42065-af5d-4be8-b0b6-7ed499ef009e",
        "API_NAME": "行動簽核 WebView -取得附件",
        "ApiDescription": "主管 App 行動簽核\nWebView 取得附件",
        "API_URL": "ErpNextAdApi/api/mobile/Attatachment",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036333",
        "ApiCreateTime": "20190903091458",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "dfe35093-bf2e-43d1-a2d5-7ef5a7247e22",
        "API_NAME": "BOSS523 主管日報webview資料提供",
        "ApiDescription": "BOSS523 主管日報webview資料提供",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/ResourceWebview",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191106145451",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "86726a52-2a97-4040-a5de-7f79ee7c4d54",
        "API_NAME": "HP011 取得有興趣/主題推薦首頁清單",
        "ApiDescription": "HP011-取得有興趣/主題推薦首頁清單",
        "API_URL": "ErpNextSdApi/api/HopePond/GetInterestHomepage",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171128000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "db00067e-e248-4adc-89a0-7faa543c3928",
        "API_NAME": "BOSS717服務活動列表 ",
        "ApiDescription": "BOSS717服務活動列表",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetServiceActivityList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903164424",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d96033fc-b772-4f22-9639-80699246fe86",
        "API_NAME": "BOSS611 更多畫面顯示",
        "ApiDescription": "BOSS611 更多畫面顯示",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/MoreScreen",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20191023095402",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "799fa6e0-be7a-4229-b8ee-809229e0ad14",
        "API_NAME": "CD112  顧客篩選記錄",
        "ApiDescription": "CD112- 顧客篩選記錄",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetSearchRecord",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6acf0ec2-1c50-42b2-9680-82d1bb6f97a8",
        "API_NAME": "UpdateFileSave",
        "ApiDescription": "SM203\t將文件加入/取消收藏",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/UpdateFileSave",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f7e8223e-5dd0-4cc8-a3f0-82dc52d47986",
        "API_NAME": "GetCustomeSignImage",
        "ApiDescription": "取得顧客簽名圖檔",
        "API_URL": "ErpNextSdApi/api/Image/GetCustomerSignImage",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20180312114050",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "dd0fdd89-eda2-49bd-8c92-849254fe6959",
        "API_NAME": "updateRecipient",
        "ApiDescription": "DI018 新增黃卡聯絡人資料",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/updateRecipient",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171204000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "dac8480b-da36-4ca1-9766-849a4e54d772",
        "API_NAME": "getServiceItemList",
        "ApiDescription": "DI013-取得服務項目列表",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getServiceItemList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a77ab53e-30d2-4279-b188-84c27a45e244",
        "API_NAME": "[F307] 洽談事件/報修事件列表",
        "ApiDescription": "[F307] 洽談事件/報修事件列表",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetEventList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202010261811  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fe6cd619-4c82-4756-b999-85074ec3a595",
        "API_NAME": "PS009-取得官網menu架構",
        "ApiDescription": "取得官網menu架構",
        "API_URL": "/site/GetMenuTree",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "N",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181106114957",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cd3373df-bd6f-4200-9472-860ef327bf55",
        "API_NAME": "BOSS804APP版本確認",
        "ApiDescription": "BOSS804APP版本確認",
        "API_URL": "ErpNextSdApi/api/AuroraBossOther/GetAppVersion",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20190917150806",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "877f8465-d18d-47e4-a319-864ed026f2d7",
        "API_NAME": "P01000",
        "ApiDescription": "第一頁項目取得",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getItemUrl",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cdb1b742-f9bb-49a0-813c-87eb129ee420",
        "API_NAME": "getRecipient",
        "ApiDescription": "DI017 可寄送黃卡列表",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getRecipient",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20171204000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f0b6bfec-3045-462b-a217-886332cdc4b2",
        "API_NAME": "行動簽核 WebView -送出單據",
        "ApiDescription": "主管 App 行動簽核\nWebView 單據送簽回 ERP",
        "API_URL": "ErpNextAdApi/api/mobile/MDUploadDoc",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036333",
        "ApiCreateTime": "20190903091458",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "28c7eab8-9749-425b-8194-891d88d9d64e",
        "API_NAME": "DR001 取得日報行事曆點點的資料",
        "ApiDescription": "取得日報行事曆相關設定欄位的資料",
        "API_URL": "ErpNextSdApi/api/DailyReport/GetDailyReportList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033525",
        "ApiCreateTime": "202012100933  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "5cee048d-98cd-4058-a32c-89a3bea53c3d",
        "API_NAME": "CD104 刪除顧客聯絡人",
        "ApiDescription": "CD104-刪除顧客聯絡人",
        "API_URL": "ErpNextSdApi/api/CustomerData/DeleteCustomerContacter",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cb556e1b-d17e-43ad-b23a-8b3a01d1c7e3",
        "API_NAME": "BOSS705顧客資料-設備",
        "ApiDescription": "BOSS705顧客資料-設備",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerEquipment",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903161659",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "45bed0c1-6a0b-4920-8f57-8b9703f66b5f",
        "API_NAME": "PS008-取得更新的會員紅利",
        "ApiDescription": "取得更新或新增的會員及紅利資料",
        "API_URL": "/case/getmemberupdateinfos",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044678",
        "ApiCreateTime": "20180625094011",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e4bbeef0-0b1a-402d-ba8b-8c394b22f309",
        "API_NAME": "CD102 新增/編輯顧客聯絡人",
        "ApiDescription": "CD102-新增/編輯顧客聯絡人",
        "API_URL": "ErpNextSdApi/api/CustomerData/UpdateCustomerContacter",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8598414c-6fcf-4091-a569-8d836a4007e7",
        "API_NAME": "getCustomerDetail",
        "ApiDescription": "DI003-顧客詳情",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getCustomerDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "63237aff-59e2-45be-827d-8ea2bd15f654",
        "API_NAME": "BOSS507 更新批示內容並退回日報-總經理/處長",
        "ApiDescription": "BOSS507 更新批示內容並退回日報-總經理/處長",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/ReplyAgainCommentAndSendBackDailyReport",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183511",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "756b2531-6e4e-412c-9ba3-8f8404f1b042",
        "API_NAME": "BOSS708拜訪紀錄",
        "ApiDescription": "BOSS708拜訪紀錄",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerVisitRecord",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "17c8e424-22ed-4ef7-9448-8f9c2a9b2a45",
        "API_NAME": "OFCuGetFile",
        "ApiDescription": "OFCuGetFile",
        "API_URL": "ErpNextSdApi/api/Image/GetOFCuFile",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202012101109  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "47f40097-8e73-4de4-b747-90ec7838519d",
        "API_NAME": "GetList",
        "ApiDescription": "CU002-取得顧客交易記錄",
        "API_URL": "ErpNextSdApi/api/OAOfficialSite/GetList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "20170419000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "910eecc0-ef0d-4019-9569-91127257b1df",
        "API_NAME": "DR006 取得未收款資訊",
        "ApiDescription": "DR006 取得未收款資訊",
        "API_URL": "ErpNextFiApi/api/OASdApp/getAccountReceivable",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "202012081459  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c372e32d-1f65-4b9d-bbb4-914558e662c6",
        "API_NAME": "B04003",
        "ApiDescription": "問卷問題取得",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getQuestionnaire",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "06e31421-45ee-484a-b50c-914e69188e4d",
        "API_NAME": "getSupportPhone",
        "ApiDescription": "SM005\t取得支援電話",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/getSupportPhone",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1e886af5-ad01-49d6-8e55-91d7d3a83205",
        "API_NAME": "F114 訊息設定(已讀/刪除)",
        "ApiDescription": "F114 訊息設定(已讀/刪除)",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/UpdateNotifySet",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202009251723  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4355abbe-d6ef-4352-9524-9218c1ca1520",
        "API_NAME": "F104 搜尋結果",
        "ApiDescription": "F104 搜尋結果",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetSearchResult",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010051319  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "47c48b3d-eea1-434e-9228-93d6ca6e625d",
        "API_NAME": "EQ010 取得機器廠牌",
        "ApiDescription": "EQ010-取得機器廠牌",
        "API_URL": "ErpNextSdApi/api/Equipment/GetBrand",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8c869507-fbbc-46d5-99df-94043d84ff93",
        "API_NAME": "getContractReached",
        "ApiDescription": "SP004\t簽約達成",
        "API_URL": "ErpNextSdApi/api/OASmServicePerformance/getContractReached",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170705000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a7c94a7e-095f-4271-b3b4-95a0e46c1549",
        "API_NAME": "/GetCU032Image",
        "ApiDescription": "/GetCU032Image",
        "API_URL": "ErpNextSdApi/api/Image/GetCU032Image",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202010291441  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "90fe7767-a2a7-42d0-a05f-96ea955b2273",
        "API_NAME": "F001 新增/修改綁定會員資訊",
        "ApiDescription": "F001 新增/修改綁定會員資訊",
        "API_URL": "ErpNextSdApi/api/OFCuMemberAccount/UpdateMember",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010221110  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c07dc9d6-0b02-4cf1-9f05-97b86e654537",
        "API_NAME": "PR002-回覆折扣提案",
        "ApiDescription": "ERP完成專案資料設定後, 回拋官網",
        "API_URL": "/case/createdrt",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180420182220",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "3cd63199-5ac1-4e97-a19f-97c5368b2bbf",
        "API_NAME": "BOSS605\t庫存查詢-選擇大類",
        "ApiDescription": "BOSS605\t庫存查詢-選擇大類",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/GetInventoryCategories",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191007113501",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d9e87363-3188-474f-8ad9-989910086c88",
        "API_NAME": "HR001 人員登入",
        "ApiDescription": "HR001-帳號密碼登入",
        "API_URL": "ErpNextSdApi/api/HummanResource/Login",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "86256253-4152-4dd0-bd9d-98f2bb17239b",
        "API_NAME": "BOSS116 取得群組搜尋的條件清單",
        "ApiDescription": "BOSS116 取得群組搜尋的條件清單",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/GetDataGroupList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00030566",
        "ApiCreateTime": "20190912112234",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "80574362-d25f-4b30-8a58-994580eb15c5",
        "API_NAME": "PS012-取得留言板資料",
        "ApiDescription": "取得留言板資料",
        "API_URL": "/site/GetContactUsData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "N",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181113161341",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "342df865-9c3a-430e-9b34-9a2b2590149e",
        "API_NAME": "H02001",
        "ApiDescription": "新增/修改耗材訂單",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/insertConsumablesOrder",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ead523cb-ff4b-4df4-9329-9adf87f3cee9",
        "API_NAME": "CreateDrt",
        "ApiDescription": "PR001-建立官網方案資料",
        "API_URL": "ErpNextSdApi/api/OAOfficialSite/CreateDrt",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180419000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ad599595-93bf-4eaa-a610-9afff904e500",
        "API_NAME": "BOSS503 取得日報列表List-單位主管/總經理/處長",
        "ApiDescription": "BOSS503 取得日報列表List-單位主管/總經理/處長",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/getDailyReportList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183511",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "8682afa7-2218-4858-8a0a-9b7ac4fc2dcd",
        "API_NAME": "BOSS110  取得可代理的同仁",
        "ApiDescription": "BOSS110  取得可代理的同仁",
        "API_URL": "ErpNextSdApi/api/AuroraBossHumanResource/GetDataAgentList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00030566",
        "ApiCreateTime": "20190911102903",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1c61e046-20b9-438c-a0f4-9beab8b3745a",
        "API_NAME": "SE223 刪除拜訪現有設備",
        "ApiDescription": "SE223-刪除拜訪現有設備",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/DeleteVisitExisted",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "18425d70-abbd-41bb-9341-9cc71a2c7316",
        "API_NAME": "SE121 設置拜訪狀態",
        "ApiDescription": "SE121-設置拜訪狀態",
        "API_URL": "ErpNextSdApi/api/ScheduleEvent/SetVisitStatus",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "18ae7514-f0fb-46b0-8ecd-9d6b5304bb2e",
        "API_NAME": "WebView 拿 session",
        "ApiDescription": "主管 App 行動簽核\nWebView 取得 Session 資訊",
        "API_URL": "ErpNextAdApi/api/mobile/MDGetSession",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036333",
        "ApiCreateTime": "20190903091458",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0460aebe-7af8-46f5-8659-9dee9b447db5",
        "API_NAME": "[F312] 事件內頁其他會議時間列表",
        "ApiDescription": "ErpNextSdApi/api/OFCuCase/GetEventMeeting",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetEventMeeting",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202011051641  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "afcbedf0-8764-46ec-9931-a0eb3223306b",
        "API_NAME": "updateServiceStatus",
        "ApiDescription": "DI014-服務開始",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/updateServiceStatus",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "09bb46f9-e48e-4e80-8e0d-a35152ca9226",
        "API_NAME": "SP002 業績帳款",
        "ApiDescription": "SP002 業績帳款",
        "API_URL": "ErpNextSdApi/api/MyCenter/PerformanceAccount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00047455",
        "ApiCreateTime": "202012091656  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "22d1608a-ed54-499a-854d-a39eeb2d93c1",
        "API_NAME": "GetCU061Image",
        "ApiDescription": "GetCU061Image",
        "API_URL": "ErpNextSdApi/api/Image/GetCU061Image",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202011060937  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6863b3b5-0225-4414-89cc-a3ba2510987e",
        "API_NAME": "BOSS710顧客繳款發票細項",
        "ApiDescription": "BOSS710顧客繳款發票細項",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetInvoiceDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "79eadc38-5e0e-4c29-bd7b-a42af3d9acc3",
        "API_NAME": "[F305] 案件列表(採購、報修)",
        "ApiDescription": "[F305] 案件列表(採購、報修)",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetCaseList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202010261807  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4616b0fa-daf3-4acf-89bd-a4a38fbe0a49",
        "API_NAME": "updateServiceDetail",
        "ApiDescription": "DI010-填寫服務回饋",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/updateServiceDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fb7dc739-d298-42c8-ab28-a4e009ec14cb",
        "API_NAME": "EQ212 刪除顧客推銷機型",
        "ApiDescription": "EQ212-刪除顧客推銷機型",
        "API_URL": "ErpNextSdApi/api/Equipment/DeletePromo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d1513daf-22df-4f85-877b-a55a8d792406",
        "API_NAME": "故障問題詳細內容",
        "ApiDescription": "SM002\t故障問題詳細內容",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/getFaultProblemDetails",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c31f91a9-e9e4-421e-8ddb-a5a392e18339",
        "API_NAME": "CD105 取得聯絡人的部門/職位分類",
        "ApiDescription": "CD105 取得聯絡人的部門/職位分類",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetCustomerContacterType",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191023175538",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4f124fe6-850b-4d90-b2c4-a6a1b47edee1",
        "API_NAME": "F402 新增預約展廳",
        "ApiDescription": "新增預約展廳",
        "API_URL": "ErpNextSdApi/api/OFCuContactAurora/AddReservation",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202010261708  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "3b50a0c6-4943-4c7e-94b0-a84ad4c19f44",
        "API_NAME": "DR002 當天日報內容",
        "ApiDescription": "取得當天日報內容",
        "API_URL": "ErpNextSdApi/api/DailyReport/GetDailyReportDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046670",
        "ApiCreateTime": "202012101406  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "946009c9-4b65-44fa-b45f-a94720f5011e",
        "API_NAME": "getPerformanceAmount",
        "ApiDescription": "SP005\t業績金額",
        "API_URL": "ErpNextSdApi/api/OASmServicePerformance/getPerformanceAmount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170705000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6e83f304-e8c5-4ad4-a917-a97f64d8bfb7",
        "API_NAME": "B02005",
        "ApiDescription": "費用分析查詢結果產生統計圖表",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getChargeResultChart",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a1ea16dc-ee48-48ea-812e-a9a5ef276368",
        "API_NAME": "",
        "ApiDescription": "CD011-取得附近顧客",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetListNear",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "be75cb85-7fc9-4ad8-a39c-a9b1a8fc6943",
        "API_NAME": "EQ011 取得機器型號",
        "ApiDescription": "EQ011-取得機器型號",
        "API_URL": "ErpNextSdApi/api/Equipment/GetType",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "59961ff9-4679-4104-92c1-abeceab8e490",
        "API_NAME": "HP001 取得希望之池顧客清單",
        "ApiDescription": "HP001-取得希望之池顧客清單",
        "API_URL": "ErpNextSdApi/api/HopePond/GetList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "5769b045-aaa6-44a2-a546-ad2315fd3891",
        "API_NAME": "MC001 取得我的主頁資料 (不含個人基本資料)",
        "ApiDescription": "MC001-取得我的主頁資料 (不含個人基本資料)",
        "API_URL": "ErpNextSdApi/api/MyCenter/GetPageInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "27a170ff-c1ae-4c1a-af0d-ae8e631c94fd",
        "API_NAME": "BOSS506 送出填寫(統一)批示-總經理/處長",
        "ApiDescription": "BOSS506 送出填寫(統一)批示-總經理/處長",
        "API_URL": "ErpNextSdApi/api/AuroraBossBossDailyReport/ReplyCommentList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00042852",
        "ApiCreateTime": "20190905183511",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1fb4eaee-1a35-4dd6-8086-af4356b4a61b",
        "API_NAME": "F502 成員管理列表",
        "ApiDescription": "F502 成員管理列表",
        "API_URL": "ErpNextSdApi/api/OFCuMine/GetAccountList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202011021339  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c535278d-2ed4-4f88-8e98-b092870da39d",
        "API_NAME": "[F306] 案件詳細資訊",
        "ApiDescription": "[F306] 案件詳細資訊",
        "API_URL": "ErpNextSdApi/api/OFCuCase/GetCaseDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202010261810  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a5ab06df-1647-4423-9f38-b1b62f38285c",
        "API_NAME": "BOSS613 單位別業績統計表(SDSO309R10)",
        "ApiDescription": "BOSS613 單位別業績統計表(SDSO309R10)",
        "API_URL": "ErpNextSdApi/api/AuroraBossMore/PerformanceStatisticsByUnit",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20200812134845",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "1bef6764-3f06-4c3e-9335-b2fe5f800527",
        "API_NAME": "OverdueReceivables",
        "ApiDescription": "DI006-未收款",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getOverdueReceivables",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "29828b88-0304-4d44-afbc-b30b77a8928d",
        "API_NAME": "GetCU037Image",
        "ApiDescription": "GetCU037Image",
        "API_URL": "ErpNextSdApi/api/Image/GetCU037Image",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046959",
        "ApiCreateTime": "202010291449  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "110d1f70-d6a2-43d1-a261-b37710527359",
        "API_NAME": "BOSS719 營業需求單-指派同仁",
        "ApiDescription": "BOSS719 營業需求單-指派同仁",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetBusinessDemandAssignColleagues",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20190912094716",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "985e558f-432d-41b8-9f9a-b45eebff86c9",
        "API_NAME": "H01004",
        "ApiDescription": "查詢報修/叫耗材紀錄(需含內容及進度)",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/getOrderInfo",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "d9ad0593-3b1c-4f9f-98f8-b5093b8ebec6",
        "API_NAME": "BOSS409取得KPI -資金-帳款",
        "ApiDescription": "BOSS409取得KPI -資金-帳款",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetKpiAccount",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164832",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e88ae9c4-2723-4fd0-bb53-b537d63db8b6",
        "API_NAME": "getRepairDetail",
        "ApiDescription": "DI002-叫修單/行程詳細內容",
        "API_URL": "ErpNextSdApi/api/OASmDispatch/getRepairDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ed157978-9492-4667-b579-b5b59ee63e25",
        "API_NAME": "行動簽核 WebView -下位簽核者清單",
        "ApiDescription": "主管 App 行動簽核\nWebView 下位簽核者清單\n包含事業部, 部門, 同仁",
        "API_URL": "ErpNextAdApi/api/mobile/GetEMPData/{comp}",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036333",
        "ApiCreateTime": "20190918092753",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c7c91694-0963-4790-a936-b75a5cc4a5ae",
        "API_NAME": "[F316] 新增報修案件",
        "ApiDescription": "ErpNextSdApi/api/OFCuCase/UpdateRepair",
        "API_URL": "ErpNextSdApi/api/OFCuCase/UpdateRepair",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "202011051645  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "42a7ecc9-946d-4390-81f9-b8c381dbb3e7",
        "API_NAME": "CD012 取得顧客拜訪記錄",
        "ApiDescription": "CD012-取得顧客拜訪記錄",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetVisitList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "015b79be-3239-460f-8dc4-631643cb0aaf",
                "PROJECT_NAME": "A0A2之銷售雲",
                "ProjectDescription": "提供A0A2部門人員資料、同仁帳密驗證",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00033567",
                "ProjectCreateTime": "20191031102655"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f157d510-67d5-4fa5-882c-b8c822f90d30",
        "API_NAME": "取得組織人員異動資料",
        "ApiDescription": "OaOrgizationEmployeeDate-取得組織人員異動資料",
        "API_URL": "ErpNextHrApi/api/OaOrgEmpData/OaOrgizationEmployeeDate",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033567",
        "ApiCreateTime": "20191031110621",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "579726e0-c942-4a13-b40e-ba3a9ee47bd9",
        "API_NAME": "B04005",
        "ApiDescription": "問卷結果檢視",
        "API_URL": "ErpNextSdApi/api/OACuExclusiveServe/getQuestionnaireResult",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "23953481-bac1-40ef-a26c-bb8d80b0e9df",
        "API_NAME": "H01005",
        "ApiDescription": "查詢故障類別故障排除顯示建議說明清單",
        "API_URL": "ErpNextSdApi/api/OACuAssistant/getShowSuggestions",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "37337362-9935-4b7d-b79e-bbb9775368c2",
        "API_NAME": "GetApprovalNotificationList",
        "ApiDescription": "公文未簽核提醒",
        "API_URL": "ErpNextAdApi/api/MobileApprovalNotification/GetApprovalNotificationList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200227133451",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0b305e61-6ba3-4652-9d36-bc1d82176118",
        "API_NAME": "PS003-紅利回饋",
        "ApiDescription": "累積會員點數",
        "API_URL": "/discount/cashback",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180420182220",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "cfa4dbbe-92a3-4883-a697-c0112fccde2b",
        "API_NAME": "BOSS722 營業需求單--結案送出",
        "ApiDescription": "BOSS722 營業需求單--結案送出",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/UpdateBusinessDemandListCaseClose",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20190912093816",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "eb849fc3-b9a9-4524-a7de-c0170270a585",
        "API_NAME": "PS001-檢查QRCODE",
        "ApiDescription": "條碼驗證",
        "API_URL": "/discount/checkqrcode",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180420182220",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "751951ca-8dc5-4284-9909-c608fc8061e1",
        "API_NAME": "BOSS401取得KPI -市場-總覽",
        "ApiDescription": "BOSS401取得KPI -市場-總覽",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetMarketOverview",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905173825",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6eb69594-0ca1-44a5-b042-c67073a78455",
        "API_NAME": "我的最愛文件",
        "ApiDescription": "SM202\t我的最愛文件",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/getTechnicalFavorites",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b267fd7c-ef2f-453a-a85a-c760505415cd",
        "API_NAME": "BOSS309修改行事曆",
        "ApiDescription": "BOSS309修改行事曆",
        "API_URL": "ErpNextSdApi/api/AuroraBossCalendar/UpdateCalendarData",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033525",
        "ApiCreateTime": "20190905164516",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "29bbf02c-bd81-4e20-b24a-c7898e0b0069",
        "API_NAME": "updateProblemReply",
        "ApiDescription": "SM003\t回覆該故障問題",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/updateProblemReply",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2c2f82d6-ffe1-473b-b257-c850a8f3f374",
        "API_NAME": "CD101 新增/編輯顧客",
        "ApiDescription": "CD101-新增/編輯顧客",
        "API_URL": "ErpNextSdApi/api/CustomerData/UpdateCustomer",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "7d76e3f7-4628-4d62-8746-c9b79ab21945",
        "API_NAME": "BOSS400創辦人",
        "ApiDescription": "BOSS400創辦人",
        "API_URL": "ErpNextSdApi/api/AuroraBossKpi/GetFounder",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "20190905164832",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "47bc9084-4bea-470a-99d5-ccf5bb2779a8",
        "API_NAME": "[F335] 取消報修案件",
        "ApiDescription": "[F335] 取消報修案件",
        "API_URL": "ErpNextSdApi/api/OFCuCase/UpdateRepairCancel",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20210225105814",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "68c6ee3d-c729-4d88-aea9-ccff0b5393ad",
        "API_NAME": "EQ001 取得現有設備詳細資料",
        "ApiDescription": "EQ001-取得現有設備詳細資料",
        "API_URL": "ErpNextSdApi/api/Equipment/GetExitedDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "5e02a875-7bc6-4f4b-8fbc-cd115642f72d",
        "API_NAME": "CD002 取得顧客詳細資訊",
        "ApiDescription": "CD002-取得顧客詳細資訊",
        "API_URL": "ErpNextSdApi/api/CustomerData/GetDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "fae5638f-c41a-48ac-94cb-cdfb68a57bf5",
        "API_NAME": "A01001",
        "ApiDescription": "廣告輪播",
        "API_URL": "ErpNextSdApi/api/OACuHome/getAdCarousel",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "466f3aaf-0c5e-4bc4-9a44-cf0f64d9a4be",
        "API_NAME": "HP012 取得希望之池顧客清單(有興趣/主題推薦)",
        "ApiDescription": "HP012-取得希望之池顧客清單(有興趣/主題推薦)",
        "API_URL": "ErpNextSdApi/api/HopePond/GetInterestList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171128000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管小Me",
                "ProjectDescription": "好棒棒",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "195b2e80-5cf0-451b-a7d4-d02f5e2969c8",
        "API_NAME": "BOSS316行事曆推播提供的提醒資料",
        "ApiDescription": "BOSS316行事曆推播提供的提醒資料",
        "API_URL": "ErpNextSdApi/api/AuroraBossCalendar/GetSystemHintDataById",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20191118154635",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "7555e95c-ec47-423e-ad5f-d1e4f0e9283d",
        "API_NAME": "HR201 取得招呼語",
        "ApiDescription": "HR201-取得招呼語",
        "API_URL": "ErpNextSdApi/api/HummanResource/SayHello",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "bb87e49e-2851-4ba7-8688-d24afbbcd8ca",
        "API_NAME": "getTechnicalFileList",
        "ApiDescription": "SM201\t技術文件列表",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/getTechnicalFileList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "e3ed9fc9-82f6-4a5a-a3e6-d274b0dadb71",
        "API_NAME": "F115 點了哪則找找系列",
        "ApiDescription": "F115 點了哪則找找系列",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/UpdateNewsClick",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202011241739  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0d0885b5-380a-4287-a094-d30b3774cd9e",
        "API_NAME": "HP303 取得有需求內容",
        "ApiDescription": "HP303-取得有需求內容",
        "API_URL": "ErpNextSdApi/api/HopePond/GetDemandContent",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "dfe6b56e-431f-4f35-8c6a-d362aeb1456f",
        "API_NAME": "M03000",
        "ApiDescription": "事務機及名稱列表",
        "API_URL": "ErpNextSdApi/api/OACuMember/getMachineName",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180914000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "60679da3-58a7-412b-b6ba-d47302c462d1",
        "API_NAME": "[F304] 寄送電子發票",
        "ApiDescription": "[F304] 寄送電子發票",
        "API_URL": "ErpNextFiApi/api/OFSendEinv/SendOFCuAPPEinvContent",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "202010140947  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "4e88f658-bb38-4eb9-ba1e-d480a0cec5ad",
        "API_NAME": "F101 探索-找找系列",
        "ApiDescription": "F101 探索-找找系列",
        "API_URL": "ErpNextSdApi/api/OFCuAppExplore/GetSolutionList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200921114646",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "0870f8a6-4723-43bf-91ac-d4e14c1709bf",
        "API_NAME": "F501 我的",
        "ApiDescription": "F501 我的",
        "API_URL": "ErpNextSdApi/api/OFCuMine/GetAboutMeDetail",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "202010301936  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "aba53064-8589-4de4-a5e7-8035289dd62e",
                "PROJECT_NAME": "顧客小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143852"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c923d896-4ad7-4709-a115-d576e1e1ecda",
        "API_NAME": "M04000",
        "ApiDescription": "訊息中心列表",
        "API_URL": "ErpNextSdApi/api/OACuMe/getEdmList",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20180917000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "b1b050fe-c96c-474e-b1ca-d58fe97fdb44",
        "API_NAME": "TranOrderInfo",
        "ApiDescription": "PR001-發出訂單資訊-由震旦ERP系統內發出新訂單給夏普方",
        "API_URL": "ErpNextSdApi/api/SharpTranOrderInfo/TranOrderInfo/",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044678",
        "ApiCreateTime": "20181002161259",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 0
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "服務小ME",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "2197b718-64af-4ab2-be15-d64043eb19bd",
        "API_NAME": "getMyDay",
        "ApiDescription": "SP001 我的一天",
        "API_URL": "ErpNextSdApi/api/OASmServicePerformance/getMyDay",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170705000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "00037313",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "魁亨",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                    "EnvDescription": "魁亨-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                },
                {
                    "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                    "EnvDescription": "魁亨-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "00037313",
                    "EnvCreateTime": "20170419000000"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ea7826df-d623-4069-ae38-8b15b632b5a8",
                "PROJECT_NAME": "電信官網資料交換專案",
                "ProjectDescription": "與廠商魁亨做資料交換官網與會員資料",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20180419105022"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "92f4df02-7a61-4eba-9617-d7fdec767257",
        "API_NAME": "PS005-查詢紅利點數",
        "ApiDescription": "1.單純查詢紅利點數\n2.扣抵點數前先取得紅利點數,",
        "API_URL": "/discount/getmemberbonus",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20180420182220",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "9d46d36a-b310-475e-a46d-3adad117bdfb",
                "PROJECT_NAME": "家具顧客APP",
                "ProjectDescription": "創新規劃顧客應用場景包含強化家具形象傳遞、提供項目管理，針對約訪、設計、報價、交貨即時互動、專屬顧客服務，自動化產生報修，培養忠誠顧客",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20200916142541"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "appName",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "deviceToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "91e32196-ad3d-4eaf-9635-d86799d03651",
        "API_NAME": "[F303] 電子發票超商付款",
        "ApiDescription": " 超商繳款條碼",
        "API_URL": "ErpNextSdApi/api/OFCuService/GetPaymentBarcode",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "202010201137  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 3,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "VR000316",
            "OwnerCreateTime": "20190604160001",
            "OWNER_NAME": "電子豹",
            "OwnerIsInternal": "N",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "2c122575-786b-468f-a4f1-8a86afd1492f",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                },
                {
                    "OWNER_ENV_TOKEN": "acdfa9f1-ad26-4904-8000-9fb977eda9ba",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                },
                {
                    "OWNER_ENV_TOKEN": "cbaf3e27-2cb9-49cc-9327-d006210e8820",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                    "EnvDescription": "其實是正式",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "VR000316",
                    "EnvCreateTime": "20190604160001"
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "ebb14712-e538-4b18-8f62-38475d39db99",
                "PROJECT_NAME": "OA-EDM合作案",
                "ProjectDescription": "委託外部廠商發EDM，並透過API取得E-mail開啟、廣告點閱等等資訊。",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "VR000316",
                "ProjectCreateTime": "20190624140001"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "x-api-key",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [
            {
                "ApiQueryKey": "startDate",
                "ApiQueryKeyRequired": "N"
            },
            {
                "ApiQueryKey": "endDate",
                "ApiQueryKeyRequired": "N"
            }
        ],
        "API_TOKEN": "db339fb2-0c5a-43e3-8dbd-d87687d23c81",
        "API_NAME": "查詢活動代碼",
        "ApiDescription": "透過登入key取得時效key，供後續API使用",
        "API_URL": "/report/campaigns",
        "REQUEST_METHOD": "Get",
        "ApiIsEnable": "Y",
        "ApiCreator": "VR000316",
        "ApiCreateTime": "20190604160001",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 2,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營服系統部服務(蛋寶)",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "蛋寶-對外IT環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "蛋寶-對外EDU環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "蛋寶-對外SYS環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "營業小Me",
                "ProjectDescription": "很厲害*3",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6089d22d-4f06-425a-a2ee-d8b667b48f51",
        "API_NAME": "HP305 取得有需求分類項目",
        "ApiDescription": "HP305-取得有需求分類項目",
        "API_URL": "ErpNextSdApi/api/HopePond/GetDemandItem",
        "REQUEST_METHOD": "Post",
        "ApiIsEnable": "Y",
        "ApiCreator": "00043821",
        "ApiCreateTime": "20171221000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    }
  ]


  OwnerInfoList: OwnerInfo[] = [
    {
        "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
        "OWNER_NAME": "魁亨ALL",
        "DESCRIPTION": "各事業部共用資料交換",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20181121100211",
        "EDITOR": "余宗倫",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
                "OWNER_NAME": "魁亨ALL",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00038832",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20190225100224",
                "EnvCreateTime": "20181121100439",
                "EnvCreator": "00038832",
                "EnvDescription": "魁亨ALL測試EDU",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "f664367e-3057-416f-910a-63a4cda91bba"
            },
            {
                "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
                "OWNER_NAME": "魁亨ALL",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00038832",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20190225100224",
                "EnvCreateTime": "20181121100439",
                "EnvCreator": "00038832",
                "EnvDescription": "魁亨ALL正式SYS",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://119.81.165.141/aurora_api/api",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "41ed9b91-3747-4397-9d61-6919be39b458"
            },
            {
                "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
                "OWNER_NAME": "魁亨ALL",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00038832",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20190225100224",
                "EnvCreateTime": "20181121100439",
                "EnvCreator": "00038832",
                "EnvDescription": "魁亨ALL測試IT",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "2892b3be-9a5c-4df7-a59d-89638b179167"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
        "OWNER_NAME": "測試王",
        "DESCRIPTION": "測試王",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20210107175830",
        "EDITOR": "王崇宇",
        "EDIT_TIME": null,
        "ProjectCount": "0",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
                "OWNER_NAME": "測試王",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175830",
                "EnvCreateTime": "20210107175830",
                "EnvCreator": "00046959",
                "EnvDescription": "測試王的 EDU 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "cb0a7ff5-a002-4c7b-8063-07c215ba0cb9"
            },
            {
                "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
                "OWNER_NAME": "測試王",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175830",
                "EnvCreateTime": "20210107175830",
                "EnvCreator": "00046959",
                "EnvDescription": "測試王的 SYS 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "a68bd2f4-37f8-4799-807c-e664e9423893"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
        "OWNER_NAME": "電子豹",
        "DESCRIPTION": "EDM的廠商",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20190604160001",
        "EDITOR": "陳冠州V      ",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
                "OWNER_NAME": "電子豹",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "VR000316",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20190604160001",
                "EnvCreator": "VR000316",
                "EnvDescription": "其實是正式",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "2c122575-786b-468f-a4f1-8a86afd1492f"
            },
            {
                "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
                "OWNER_NAME": "電子豹",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "VR000316",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20190604160001",
                "EnvCreator": "VR000316",
                "EnvDescription": "其實是正式",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "acdfa9f1-ad26-4904-8000-9fb977eda9ba"
            },
            {
                "OWNER_TOKEN": "bd27ea8d-5d12-4525-88c5-1cd4b81959d3",
                "OWNER_NAME": "電子豹",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "VR000316",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20190604160001",
                "EnvCreator": "VR000316",
                "EnvDescription": "其實是正式",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://6cy7me8g0i.execute-api.us-east-1.amazonaws.com/v1",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "cbaf3e27-2cb9-49cc-9327-d006210e8820"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
        "OWNER_NAME": "研發部服務",
        "DESCRIPTION": "ErpNextADAPI",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20190912181217",
        "EDITOR": "李俊霖",
        "EDIT_TIME": null,
        "ProjectCount": "2",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
                "OWNER_NAME": "研發部服務",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00042852",
                "CREATE_TIME": null,
                "EDITOR": "00037313",
                "EDIT_TIME": "20200305134846",
                "EnvCreateTime": "20190912181217",
                "EnvCreator": "00042852",
                "EnvDescription": "蛋寶-對外IT環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "f10a8b4b-e2ee-4aed-b649-62e6512e0a19"
            },
            {
                "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
                "OWNER_NAME": "研發部服務",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00042852",
                "CREATE_TIME": null,
                "EDITOR": "00037313",
                "EDIT_TIME": "20200305134846",
                "EnvCreateTime": "20190912181217",
                "EnvCreator": "00042852",
                "EnvDescription": "蛋寶-對外EDU環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "c929749c-3838-407a-baf8-a9165c9d25cd"
            },
            {
                "OWNER_TOKEN": "e0865c6c-e889-493a-83f8-2f9d5d21edf5",
                "OWNER_NAME": "研發部服務",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00042852",
                "CREATE_TIME": null,
                "EDITOR": "00037313",
                "EDIT_TIME": "20200305134846",
                "EnvCreateTime": "20190912181217",
                "EnvCreator": "00042852",
                "EnvDescription": "蛋寶-對外SYS環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "7c1b33ab-44c9-4463-83d2-ef67739a8033"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "3aaab13e-3d62-4c0b-acb3-36123257fddf",
        "OWNER_NAME": "測試王2",
        "DESCRIPTION": "測試王2",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20210107175950",
        "EDITOR": "王崇宇",
        "EDIT_TIME": null,
        "ProjectCount": "0",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "3aaab13e-3d62-4c0b-acb3-36123257fddf",
                "OWNER_NAME": "測試王2",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175950",
                "EnvCreateTime": "20210107175950",
                "EnvCreator": "00046959",
                "EnvDescription": "測試王2的 SYS 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "248f9848-dffe-43e0-b59e-c2b2dbb648a3"
            },
            {
                "OWNER_TOKEN": "3aaab13e-3d62-4c0b-acb3-36123257fddf",
                "OWNER_NAME": "測試王2",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175950",
                "EnvCreateTime": "20210107175950",
                "EnvCreator": "00046959",
                "EnvDescription": "測試王2的 EDU 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "25d24009-3a08-4ceb-b044-e72e00d8a661"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "0bbba119-5c7a-45c3-895c-74d2f8891abd",
        "OWNER_NAME": "魁亨",
        "DESCRIPTION": "A0A2之銷售雲",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20191031103044",
        "EDITOR": "郭芝均",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "0bbba119-5c7a-45c3-895c-74d2f8891abd",
                "OWNER_NAME": "魁亨",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00033567",
                "CREATE_TIME": null,
                "EDITOR": "00033567",
                "EDIT_TIME": "20191031104622",
                "EnvCreateTime": "20191031103044",
                "EnvCreator": "00033567",
                "EnvDescription": "IT",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "1a65c694-0939-4df3-a37c-786f38567281"
            },
            {
                "OWNER_TOKEN": "0bbba119-5c7a-45c3-895c-74d2f8891abd",
                "OWNER_NAME": "魁亨",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00033567",
                "CREATE_TIME": null,
                "EDITOR": "00033567",
                "EDIT_TIME": "20191031104622",
                "EnvCreateTime": "20191031103044",
                "EnvCreator": "00033567",
                "EnvDescription": "SYS",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "f8fed6c6-08ab-442b-ac64-9bf285cdb659"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "cc12e9f3-6b52-45b4-b33b-80cc1c95474a",
        "OWNER_NAME": "夏普(SHARP)",
        "DESCRIPTION": "夏普公司",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20180928110327",
        "EDITOR": "楊予青",
        "EDIT_TIME": null,
        "ProjectCount": "0",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "cc12e9f3-6b52-45b4-b33b-80cc1c95474a",
                "OWNER_NAME": "夏普(SHARP)",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00044678",
                "CREATE_TIME": null,
                "EDITOR": "00044678",
                "EDIT_TIME": "20181002161456",
                "EnvCreateTime": "20180928110327",
                "EnvCreator": "00044678",
                "EnvDescription": "夏普-對外EDU環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "dac715a6-4cfb-423e-941b-cf4320e4a609"
            },
            {
                "OWNER_TOKEN": "cc12e9f3-6b52-45b4-b33b-80cc1c95474a",
                "OWNER_NAME": "夏普(SHARP)",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00044678",
                "CREATE_TIME": null,
                "EDITOR": "00044678",
                "EDIT_TIME": "20181002161456",
                "EnvCreateTime": "20180928110327",
                "EnvCreator": "00044678",
                "EnvDescription": "夏普-對外IT環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "e8f619f9-eb98-4654-a48b-efa1e4731656"
            },
            {
                "OWNER_TOKEN": "cc12e9f3-6b52-45b4-b33b-80cc1c95474a",
                "OWNER_NAME": "夏普(SHARP)",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00044678",
                "CREATE_TIME": null,
                "EDITOR": "00044678",
                "EDIT_TIME": "20181002161456",
                "EnvCreateTime": "20180928110327",
                "EnvCreator": "00044678",
                "EnvDescription": "夏普-對外SYS環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "e7a4906b-4529-42ef-a079-f72f8cb184cb"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "5d6803db-004b-478c-876e-840235fd94b7",
        "OWNER_NAME": "HelloBossWebView",
        "DESCRIPTION": "HelloBossWebView",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20200304135144",
        "EDITOR": "陳冠州",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "5d6803db-004b-478c-876e-840235fd94b7",
                "OWNER_NAME": "HelloBossWebView",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200304135144",
                "EnvCreator": "00037313",
                "EnvDescription": "",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "ed503a5b-dbe7-444c-979f-91150b7e17f4"
            },
            {
                "OWNER_TOKEN": "5d6803db-004b-478c-876e-840235fd94b7",
                "OWNER_NAME": "HelloBossWebView",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200304135144",
                "EnvCreator": "00037313",
                "EnvDescription": "",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "ffcb003f-743a-42ce-b27f-f74c4447c194"
            },
            {
                "OWNER_TOKEN": "5d6803db-004b-478c-876e-840235fd94b7",
                "OWNER_NAME": "HelloBossWebView",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200304135144",
                "EnvCreator": "00037313",
                "EnvDescription": "",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "42502d17-6fb6-41a1-b898-fd1cb0175984"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "32a8b9f0-469d-4180-8813-840527e4be29",
        "OWNER_NAME": "聯強",
        "DESCRIPTION": "聯強資料交換使用",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20200703115456",
        "EDITOR": "劉明坤",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "32a8b9f0-469d-4180-8813-840527e4be29",
                "OWNER_NAME": "聯強",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00033525",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200703115456",
                "EnvCreator": "00033525",
                "EnvDescription": "EDU測試區資料使用",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "775c6dee-334d-4dff-9e52-521472a1d0d9"
            },
            {
                "OWNER_TOKEN": "32a8b9f0-469d-4180-8813-840527e4be29",
                "OWNER_NAME": "聯強",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00033525",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200703115456",
                "EnvCreator": "00033525",
                "EnvDescription": "IT測試區資料使用",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "dc5dc11d-b898-411a-9c1c-640871be5286"
            },
            {
                "OWNER_TOKEN": "32a8b9f0-469d-4180-8813-840527e4be29",
                "OWNER_NAME": "聯強",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00033525",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200703115456",
                "EnvCreator": "00033525",
                "EnvDescription": "正式區資料使用",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "060092bc-a8d9-4e1f-b470-c2892ab24050"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "acafee84-ed94-47fd-89e9-93e6a46dc756",
        "OWNER_NAME": "果思設計",
        "DESCRIPTION": "主管APP的廠商",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20190724110850",
        "EDITOR": "陳怡伶",
        "EDIT_TIME": null,
        "ProjectCount": "2",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "acafee84-ed94-47fd-89e9-93e6a46dc756",
                "OWNER_NAME": "果思設計",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00036761",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20190724112154",
                "EnvCreator": "00042852",
                "EnvDescription": "果思IT環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "8c92ccbf-137c-4150-a716-0ad2bd6c519c"
            },
            {
                "OWNER_TOKEN": "acafee84-ed94-47fd-89e9-93e6a46dc756",
                "OWNER_NAME": "果思設計",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00036761",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20190724112154",
                "EnvCreator": "00042852",
                "EnvDescription": "",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "e30fd38c-72be-4c97-9814-a6d39b8fd0f7"
            },
            {
                "OWNER_TOKEN": "acafee84-ed94-47fd-89e9-93e6a46dc756",
                "OWNER_NAME": "果思設計",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00036761",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20190724112154",
                "EnvCreator": "00042852",
                "EnvDescription": "",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "d59668ad-1fea-474e-99b7-ed33860bedf2"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "8d5e4ec5-7382-4601-8420-96c6050c5f4f",
        "OWNER_NAME": "資訊室系統部",
        "DESCRIPTION": "資訊室系統部",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "202012141420  ",
        "EDITOR": "陳冠州",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "8d5e4ec5-7382-4601-8420-96c6050c5f4f",
                "OWNER_NAME": "資訊室系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "00037313",
                "EDIT_TIME": "202012141420  ",
                "EnvCreateTime": "202012141420  ",
                "EnvCreator": "00037313",
                "EnvDescription": "資訊室系統部的 SYS 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "a17e6c1a-a945-4600-aacb-1005ff416b8a"
            },
            {
                "OWNER_TOKEN": "8d5e4ec5-7382-4601-8420-96c6050c5f4f",
                "OWNER_NAME": "資訊室系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "00037313",
                "EDIT_TIME": "202012141420  ",
                "EnvCreateTime": "202012141420  ",
                "EnvCreator": "00037313",
                "EnvDescription": "資訊室系統部的 IT 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "ca40b396-9e4f-4a77-968b-109fc8a9413c"
            },
            {
                "OWNER_TOKEN": "8d5e4ec5-7382-4601-8420-96c6050c5f4f",
                "OWNER_NAME": "資訊室系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "00037313",
                "EDIT_TIME": "202012141420  ",
                "EnvCreateTime": "202012141420  ",
                "EnvCreator": "00037313",
                "EnvDescription": "資訊室系統部的 EDU 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "c1f3c1b5-fdd6-4f2b-9ca8-ef89c9668492"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
        "OWNER_NAME": "魁亨",
        "DESCRIPTION": "魁亨公司",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "              ",
        "EDITOR": "陳冠州",
        "EDIT_TIME": null,
        "ProjectCount": "2",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
                "OWNER_NAME": "魁亨",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20181121100738",
                "EnvCreateTime": "20170419000000",
                "EnvCreator": "00037313",
                "EnvDescription": "魁亨-對外SYS環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://www.aurora.com.tw/comm/commapi/api",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "d1bdab9c-479e-4c1a-b4b2-20fbf2497b01"
            },
            {
                "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
                "OWNER_NAME": "魁亨",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20181121100738",
                "EnvCreateTime": "20170419000000",
                "EnvCreator": "00037313",
                "EnvDescription": "魁亨-對外IT環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "aeb485bf-9bb5-4e79-a8d0-b0fef4dc04a0"
            },
            {
                "OWNER_TOKEN": "c295cc6f-fd6f-40a7-94b2-a5d86dd81514",
                "OWNER_NAME": "魁亨",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00037313",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20181121100738",
                "EnvCreateTime": "20170419000000",
                "EnvCreator": "00037313",
                "EnvDescription": "魁亨-對外EDU環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://dev.iifun.com.tw/auroracommapi/api",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "5d26638d-8a20-4600-8823-dacc74533189"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "29f89dbf-5245-4cb7-8fa0-ab3a770a7dbb",
        "OWNER_NAME": "後勤系統部服務",
        "DESCRIPTION": "ErpNextMMAPI",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20200703162132",
        "EDITOR": "劉明坤",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "29f89dbf-5245-4cb7-8fa0-ab3a770a7dbb",
                "OWNER_NAME": "後勤系統部服務",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00033525",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200703162132",
                "EnvCreator": "00033525",
                "EnvDescription": "後勤系統部-對外SYS環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "5f5d15b5-5e63-4407-8894-24ce91fe001d"
            },
            {
                "OWNER_TOKEN": "29f89dbf-5245-4cb7-8fa0-ab3a770a7dbb",
                "OWNER_NAME": "後勤系統部服務",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00033525",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200703162132",
                "EnvCreator": "00033525",
                "EnvDescription": "後勤系統部-對外IT環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "65a5e36e-eb59-46ea-b589-33f4a6145fd2"
            },
            {
                "OWNER_TOKEN": "29f89dbf-5245-4cb7-8fa0-ab3a770a7dbb",
                "OWNER_NAME": "後勤系統部服務",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00033525",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20200703162132",
                "EnvCreator": "00033525",
                "EnvDescription": "後勤系統部-對外EDU環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "3a9fb0cf-6562-46db-b129-553b2401a534"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "c7b231d7-2769-4dbc-8ebd-ab4e6abc251f",
        "OWNER_NAME": "測試擁有者01",
        "DESCRIPTION": "測試擁有者01",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20210107175032",
        "EDITOR": "王崇宇",
        "EDIT_TIME": null,
        "ProjectCount": "0",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "c7b231d7-2769-4dbc-8ebd-ab4e6abc251f",
                "OWNER_NAME": "測試擁有者01",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175032",
                "EnvCreateTime": "20210107175032",
                "EnvCreator": "00046959",
                "EnvDescription": "測試擁有者01的 EDU 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "d9fd7958-c37d-413a-b75d-2aa3b580d192"
            },
            {
                "OWNER_TOKEN": "c7b231d7-2769-4dbc-8ebd-ab4e6abc251f",
                "OWNER_NAME": "測試擁有者01",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175032",
                "EnvCreateTime": "20210107175032",
                "EnvCreator": "00046959",
                "EnvDescription": "測試擁有者01的 IT 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "b24f6cd9-742a-4ec4-a821-c603d9ae64a3"
            },
            {
                "OWNER_TOKEN": "c7b231d7-2769-4dbc-8ebd-ab4e6abc251f",
                "OWNER_NAME": "測試擁有者01",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175032",
                "EnvCreateTime": "20210107175032",
                "EnvCreator": "00046959",
                "EnvDescription": "測試擁有者01的 SYS 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "22e08215-501e-4304-97f2-d5d195eb4d00"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "b35c36e3-690e-42b7-86f2-c802b07d25bc",
        "OWNER_NAME": "契约锁",
        "DESCRIPTION": "契约锁站点",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20191231163233",
        "EDITOR": "陈安V",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "b35c36e3-690e-42b7-86f2-c802b07d25bc",
                "OWNER_NAME": "契约锁",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "VC004646",
                "CREATE_TIME": null,
                "EDITOR": "        ",
                "EDIT_TIME": "              ",
                "EnvCreateTime": "20191231163547",
                "EnvCreator": "VC004646",
                "EnvDescription": "契约锁主站",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://47.103.123.61:9182",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "db205ddf-3315-412e-b13e-b54b0a3ee86a"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
        "OWNER_NAME": "營服系統部服務(蛋寶)",
        "DESCRIPTION": "",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "              ",
        "EDITOR": null,
        "EDIT_TIME": null,
        "ProjectCount": "9",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
                "OWNER_NAME": "營服系統部服務(蛋寶)",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "        ",
                "CREATE_TIME": null,
                "EDITOR": "00036761",
                "EDIT_TIME": "20200921114646",
                "EnvCreateTime": "              ",
                "EnvCreator": "        ",
                "EnvDescription": "蛋寶-對外IT環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a"
            },
            {
                "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
                "OWNER_NAME": "營服系統部服務(蛋寶)",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "        ",
                "CREATE_TIME": null,
                "EDITOR": "00036761",
                "EDIT_TIME": "20200921114646",
                "EnvCreateTime": "              ",
                "EnvCreator": "        ",
                "EnvDescription": "蛋寶-對外EDU環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7"
            },
            {
                "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
                "OWNER_NAME": "營服系統部服務(蛋寶)",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "        ",
                "CREATE_TIME": null,
                "EDITOR": "00036761",
                "EDIT_TIME": "20200921114646",
                "EnvCreateTime": "              ",
                "EnvCreator": "        ",
                "EnvDescription": "蛋寶-對外SYS環境API站點",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://211.21.7.24/",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "c6e016ea-8b4b-4f26-924b-d9901816325a",
        "OWNER_NAME": "風行天",
        "DESCRIPTION": "",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "              ",
        "EDITOR": null,
        "EDIT_TIME": null,
        "ProjectCount": "3",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "c6e016ea-8b4b-4f26-924b-d9901816325a",
                "OWNER_NAME": "風行天",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "        ",
                "CREATE_TIME": null,
                "EDITOR": "00038972",
                "EDIT_TIME": "20181108172327",
                "EnvCreateTime": "              ",
                "EnvCreator": "        ",
                "EnvDescription": "風行天IT環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "6ee1378b-5245-4611-8c86-6cfd51a3255e"
            },
            {
                "OWNER_TOKEN": "c6e016ea-8b4b-4f26-924b-d9901816325a",
                "OWNER_NAME": "風行天",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "        ",
                "CREATE_TIME": null,
                "EDITOR": "00038972",
                "EDIT_TIME": "20181108172327",
                "EnvCreateTime": "              ",
                "EnvCreator": "        ",
                "EnvDescription": "風行天EDU環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "192e739f-a602-489e-bdfd-ca6e87500b22"
            },
            {
                "OWNER_TOKEN": "c6e016ea-8b4b-4f26-924b-d9901816325a",
                "OWNER_NAME": "風行天",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "        ",
                "CREATE_TIME": null,
                "EDITOR": "00038972",
                "EDIT_TIME": "20181108172327",
                "EnvCreateTime": "              ",
                "EnvCreator": "        ",
                "EnvDescription": "風行天SYS環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "8cb5c8de-b1de-4916-977d-dcd0da888cd3"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    }
  ]

  MaintainerList: EmpInfo[] = [
    {
        "EMPNO": "00046959",
        "EMP_NAME": "王崇宇",
        "DPT": null
    }
]



  constructor() { }

  GetAPiInfoListRequest(check: CheckCn) {
		return this.apiList;
	}
  GetOwnerListRequest(check: CheckCn) {
    return this.OwnerInfoList;
  }

  getMaintainerInfoRequest(){
    return this.MaintainerList;
  }

}
