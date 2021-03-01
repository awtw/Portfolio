// tslint:disable: variable-name
export class ApiInfo {
	OWNER_TOKEN: string;
	OwnerEnable: string;
	OwnerCreator: string;
	OwnerCreateTime: string;
	OWNER_NAME: string;
	OwnerIsInternal: string;
	OwnerEnableFrom_DEOWNER: string;
	API_TOKEN: string;
	API_NAME: string;
	_API_NAME?: string;
	ApiDescription: string;
	API_URL: string;
	_API_URL?: string;
	REQUEST_METHOD: string;
	ApiIsEnable: string;
	ApiCreator: string;
	ApiCreateTime: string;
	ApiEditor: string;
	ApiEditorName: string;
	EditTime: string;
	ApiEMPNO: string;
	HaveApiHeader: string;
	ApiHeaderKey: string;
	ApiHeaderKeyRequired: string;
	HaveApiQuery: string;
	ApiQueryKey: string;
	ApiQueryKeyRequired: string;
}



export class UpdateApiInfo {
	OWNER_TOKEN: string;
	REQUEST_METHOD: string;
	API_URL: string;
	API_NAME: string;
	DESCRIPTION: string;
	IS_ENABLE: string;
	CREATOR: string;
	CREATE_TIME: string;
	EDITOR: string;
	EDIT_TIME: string;
	EMPNO: string;
	API_TOKEN: string;
	EditorName?: string;
	OWNER_Name?: string;
	checkIfCN: boolean;
}

export class InsertApi {
	API_TOKEN: string;
	OWNER_TOKEN: string;
	REQUEST_METHOD: string;
	API_URL: string;
	API_NAME: string;
	DESCRIPTION: string;
	IS_ENABLE: string;
	CREATOR: string;
	CREATE_TIME: string;
	EDITOR: string;
	EDIT_TIME: string;
	EMPNO: string;
	checkIfCN: boolean;
}
export class OwnerListForTrust {
	OWNER_TOKEN: string;
	OWNER_NAME: string;
	DESCRIPTION: string;
	IS_INTERNAL: string;
	OWNER_ENV_TOKEN: string;
	OWNER_ENV: string;
}

export class InsertTrust {
	REQUEST_ENV_TOKEN: string;
	RESPONSE_ENV_TOKEN: string;
	API_TOKEN: string;
	DESCRIPTION: string;
	IS_ENABLE: string;
	CREATOR: string;
	CREATE_TIME: string;
	EDITOR: string;
	EDIT_TIME: string;
	ENV?: string;
}

export class UpdateTrustInfo extends InsertTrust {
	SNO: number;
}

export class TrustInfo {
	PROJECT_NAME: string;
	PROJECT_TOKEN: string;
	OWNER_TOKEN: string;
	OWNER_NAME: string;
	API_TOKEN: string;
	API_NAME: string;
	API_URL: string;
	ApiDescription: string;
	SNO: number;
	CREATOR: string;
	CREATE_TIME: string;
	EDITOR: string;
	EDIT_TIME: string;
	IS_ENABLE: string;
	DESCRIPTION: string;
	Environment: string;
	REQUEST_ENV_TOKEN: string;
	RequestOwner: string;
	RESPONSE_ENV_TOKEN: string;
	ResponseOwner: string;
	ownerAddEnvName?: string;
}

export class TrustListGyOwner {
	OwnerName: string;
	OwnerToken: string;
	TrustList: TrustInfo[];
	bgc?: string;
}

export class ApiKeyInfo {
	API_TOKEN: string;
	API_URL: string;
	API_NAME: string;
	DESCRIPTION: string;
	IS_ENABLE: string;
	SNO: string;
	KEY: string;
	IS_REQUIRED: string;
}

export class InsertApiKey {
	API_TOKEN: string;
	KEY: string;
	IS_REQUIRED: string;
	Name: string;
	checkIfCN: boolean;
}

export class DeleteApiKey {
	SNO: string;
}

// api Upload
export class Project {
	AD530_ID: number;
	AD530A_ID: number;
	PROJECTNAME: string;
	PROJECTDESCRIPTION: string;
	REPOSITORYNAME: string;
	REPOSITORYNAMEDESCRIPTION: string;
}

export class ProjectInfo {
	Name: string;
	Description: string;
	Info: Project[];
	bgc?: string;
}

export class ApiFeatureList {
	FeatureList: Feature[];
	FinishedFeatureList: Feature[];
}
export class Feature {
	FeatureName: string;
	FeatureDescription: string;
	AD531_ID: number;
	ProjectName: string;
	RepositoryName: string;
	FEATURETYPE: Type;
	ProgressStatus: FinishStatus;
	STATUS: Env;
	EduTime: string;
	ItTime: string;
	SysTime: string;
	GroupName: string;
	GroupStatus: GroupStatus;
	AD533_ID: number;
	CODEREVIEWURL: string;
	SignID: number;
	SignStatus: Status;
	_ProgressStatus?: string;
	_FEATURETYPE?: string;
	_STATUS?: string;
	_GroupStatus?: string;
	_SignStatus?: string;
	AD530A_ID: number;
	FeatureTypeName: string;
	GroupStatusName: string;
	FeatureStatusName: string;
	EnvStatusName: string;
	SignStatusName: string;
}

export enum FinishStatus {
	'未完成' = 0,
	'完成' = 1
}

export enum Env {
	'SYS' = 0,
	'IT' = 1,
	'EDU' = 2,
	'尚未上傳' = 3
}

export enum GroupStatus {
	'Finished' = 0,
	'Activate' = 1
}

export enum Type {
	'BUG修改' = 0,
	'功能優化' = 1,
	'新增程式' = 2
}

export enum Status {
	'尚未簽核' = 0,
	'PR' = 1,
	'審核員核准' = 2,
	'核准' = 3,
	'退回' = 4
}

export class SignInfoMessage {
	status: Status;
	mesaage: string;
	AD531ID: number;
	FeatureName: string;
	SIGNPERSON: string; // 送簽者
	nextPerson: string;
	nextPersonName: string;
	ifSupervisor: boolean;
}

export class CodeReviewer {
	DPT: string;
	DPT_NAME_SHORT: string;
	ReviewerEMPNO: string;
	ReviewerName: string;
	UpdateDate: string;
}

export class SendCodeReviewer {
	insertSign: InsertSign;
	AD531ID: AD531;
	ENV?: string;
}

export class InsertSign {
	AD531_ID: number;
	SIGNPERSON: string; // 送簽者
	NEXTPERSON: string; // 接收者
	SIGNDATE: string;
	STATUS: Status;
	SIGNCLASS: Status; // 目前跟STATUS依樣 但沒在資料表中
	THEME: string; // 訊息
}

export class AD531 {
	ID: number;
}
export class Response {
	Code: number;
	Result: string;
}

export class SignInfoList {
	AD534_ID: number;
	AD531_ID: number;
	AD533_ID: number;
	AD530_ID: number;
	REPOSITORYNAME: string;
	PROJECTNAME: string;
	SIGNPERSON: string;
	NEXTPERSON: string;
	SIGNDATE: Date;
	STATUS: Status;
	ISFINISH: boolean;
	FeatureName: string;
	_ISFINISH?: string;
	_STATUS: string;
	THEME: string;
}

export class SingInfoList {
	SignList: SignInfoList[];
	MySignList: SignInfoList[];
}

export class UserInfo {
	IsNextPerson: boolean;
	NextPerson: string;
	User: EmpInfo;
	MantainerList: EmpInfo[];
}

export class EmpInfo {
	EMPNO: string;
	EMP_NAME: string;
	DPT?: string;
}

export class DptInsideInfo {
	EMPNO: string;
	EMP_NAME: string;
}
export class InsertReviewer {
	DPT: string;
	REVIEWER: string;
}

// Group
export class Group {
	AD533_ID: number;
	GroupName: string;
	GroupDescription: string;
	EMPNO: string;
	firstString?: string;
	color?: string;
}

export class InsertNewGroupName {
	NAME: string;
	DESCRIPTION: string;
	EMPNO: string;
	STATUS: GroupStatus;
}
export class InsertGroupFeature {
	AD533_ID: number;
	AD531_ID: number;
}
export class CreateFeature {
	NAME: string;
	DESCRIPTION: string;
	AD530A_ID: number;
	AD533_ID: number;
	Type: number;
}
export class ResponseList {
	Code: number;
	branchUrl: string;
	branchDownloadUrlwithVSCode: string;
	ErrorMessage: string;
}

export class AD533Id {
	AD533ID: number;
	ProjectName: string;
	RepositoryName: string;
}

export class DeleteFeature {
	FeatureName: string;
	AD530A_ID: number;
	AD531_ID: number;
}

export class ProjectModule {
	ProjectName: string;
	RepositoryName: string;
}

export class ApiOwnerInfoEnv {
	OWNER_ENV_TOKEN: string;
	OWNER_ENV: string;
	ENV_BaseUrl: string;
	EnvDescription: string;
	EnvIsEnable: string;
	EnvCreator: string;
	EnvCreateTime: string;
}
export class ApiOwnerInfo {
	OWNER_TOKEN: string;
	OwnerISENABLE: string;
	OwnerCreator: string;
	OwnerCreateTime: string;
	OWNER_NAME: string;
	OwnerIsInternal: string;
	OwnerEnvList: ApiOwnerInfoEnv[];
}

export class ApiProjectInfo {
	PROJECT_TOKEN: string;
	PROJECT_NAME: string;
	ProjectDescription: string;
	ProjectIsENABLE: string;
	ProjectCREATOR: string;
	ProjectCreateTime: string;
}

export class ApiHeaderInfo {
	ApiHeaderKey: string;
	ApiHeaderKeyRequired: string;
	bgc?: string;
	Mandatory?: boolean;
}

export class ApiQueryStringInfo {
	ApiQueryKey: string;
	ApiQueryKeyRequired: string;
	bgc?: string;
	Mandatory?: boolean;
}

export class HierarchicalApiInfo {
	OwnerInfo: ApiOwnerInfo;
	ProjectInfo: ApiProjectInfo[];
	ApiHeaderInfo: ApiHeaderInfo[];
	ApiQueryStringInfo: ApiQueryStringInfo[];
	API_TOKEN: string;
	API_NAME: string;
	ApiDescription: string;
	API_URL: string;
	REQUEST_METHOD: string;
	ApiIsEnable: string;
	ApiCreator: string;
	ApiCreateTime: string;
	EduCount: number;
	ItCount: number;
	SysCount: number;
	QueryStringCount: number;
	HeaderCount: number;
	ProjectCount: number;
	_ownerName?: string;
	_OwnerIsInternal?: string;
	_ownerToken?: string;
	checkIfCN?: boolean;
}

export class InsertProjectOwner {
	PROJECT_TOKEN: string;
	OWNER_TOKEN: string;
	IS_ENABLE: string;
	CREATOR: string;
	CREATE_TIME: string;
	EDITOR: string;
	EDIT_TIME: string;
}

export class UserInfoCheck {
	CheckAuthority: boolean;
}

export class OwnerInfo {
	OWNER_TOKEN: string;
	OWNER_NAME: string;
	DESCRIPTION: string;
	IS_INTERNAL: string;
	IS_ENABLE: string;
	CREATOR: string;
	CREATE_TIME: string;
	EDITOR: string;
	bgc?: string;
	ProjectCount: string;
	OwnerEnvList: OwnerEnvList[];
}

export class OwnerEnvList {
	EnvCreateTime: string;
	EnvCreator: string;
	EnvDescription: string;
	EnvIsEnable: string;
	ENV_BaseUrl: string;
	OWNER_ENV: string;
	OWNER_ENV_TOKEN: string;
	OWNER_TOKEN: string;
	OWNER_NAME: string;
}
export class DeleteApi {
	API_TOKEN: string;
	checkIfCN: boolean;
}

export class CodeReviewList {
	DPT: string;
	DPT_NAME_SHORT: string;
	ReviewerEMPNO: string;
	ReviewerName: string;
	UpdateDate: string;
	UpdateDateFormat?: Date;
}
export class CheckCn {
	checkIfCN: boolean;
}

export class FilterOptions {
	displayKey: string;
	displayName: string;
	test: any;
	hideFilterInput: boolean;
}
export class Filer {
	filterOptions: any[];
	buttons: string[];
	debounceMs: number;
}
