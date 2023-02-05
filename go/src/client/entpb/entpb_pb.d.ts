import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ProcessType extends jspb.Message {
  getId(): number;
  setId(value: number): ProcessType;

  getName(): string;
  setName(value: string): ProcessType;

  getPtpidList(): Array<ProjectProcess>;
  setPtpidList(value: Array<ProjectProcess>): ProcessType;
  clearPtpidList(): ProcessType;
  addPtpid(value?: ProjectProcess, index?: number): ProjectProcess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessType.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessType): ProcessType.AsObject;
  static serializeBinaryToWriter(message: ProcessType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessType;
  static deserializeBinaryFromReader(message: ProcessType, reader: jspb.BinaryReader): ProcessType;
}

export namespace ProcessType {
  export type AsObject = {
    id: number,
    name: string,
    ptpidList: Array<ProjectProcess.AsObject>,
  }
}

export class CreateProcessTypeRequest extends jspb.Message {
  getProcessType(): ProcessType | undefined;
  setProcessType(value?: ProcessType): CreateProcessTypeRequest;
  hasProcessType(): boolean;
  clearProcessType(): CreateProcessTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProcessTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProcessTypeRequest): CreateProcessTypeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProcessTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProcessTypeRequest;
  static deserializeBinaryFromReader(message: CreateProcessTypeRequest, reader: jspb.BinaryReader): CreateProcessTypeRequest;
}

export namespace CreateProcessTypeRequest {
  export type AsObject = {
    processType?: ProcessType.AsObject,
  }
}

export class GetProcessTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetProcessTypeRequest;

  getView(): GetProcessTypeRequest.View;
  setView(value: GetProcessTypeRequest.View): GetProcessTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProcessTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProcessTypeRequest): GetProcessTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetProcessTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProcessTypeRequest;
  static deserializeBinaryFromReader(message: GetProcessTypeRequest, reader: jspb.BinaryReader): GetProcessTypeRequest;
}

export namespace GetProcessTypeRequest {
  export type AsObject = {
    id: number,
    view: GetProcessTypeRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateProcessTypeRequest extends jspb.Message {
  getProcessType(): ProcessType | undefined;
  setProcessType(value?: ProcessType): UpdateProcessTypeRequest;
  hasProcessType(): boolean;
  clearProcessType(): UpdateProcessTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProcessTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProcessTypeRequest): UpdateProcessTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProcessTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProcessTypeRequest;
  static deserializeBinaryFromReader(message: UpdateProcessTypeRequest, reader: jspb.BinaryReader): UpdateProcessTypeRequest;
}

export namespace UpdateProcessTypeRequest {
  export type AsObject = {
    processType?: ProcessType.AsObject,
  }
}

export class DeleteProcessTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteProcessTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProcessTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProcessTypeRequest): DeleteProcessTypeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProcessTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProcessTypeRequest;
  static deserializeBinaryFromReader(message: DeleteProcessTypeRequest, reader: jspb.BinaryReader): DeleteProcessTypeRequest;
}

export namespace DeleteProcessTypeRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListProcessTypeRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListProcessTypeRequest;

  getPageToken(): string;
  setPageToken(value: string): ListProcessTypeRequest;

  getView(): ListProcessTypeRequest.View;
  setView(value: ListProcessTypeRequest.View): ListProcessTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProcessTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProcessTypeRequest): ListProcessTypeRequest.AsObject;
  static serializeBinaryToWriter(message: ListProcessTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProcessTypeRequest;
  static deserializeBinaryFromReader(message: ListProcessTypeRequest, reader: jspb.BinaryReader): ListProcessTypeRequest;
}

export namespace ListProcessTypeRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: ListProcessTypeRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class ListProcessTypeResponse extends jspb.Message {
  getProcessTypeListList(): Array<ProcessType>;
  setProcessTypeListList(value: Array<ProcessType>): ListProcessTypeResponse;
  clearProcessTypeListList(): ListProcessTypeResponse;
  addProcessTypeList(value?: ProcessType, index?: number): ProcessType;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListProcessTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProcessTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProcessTypeResponse): ListProcessTypeResponse.AsObject;
  static serializeBinaryToWriter(message: ListProcessTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProcessTypeResponse;
  static deserializeBinaryFromReader(message: ListProcessTypeResponse, reader: jspb.BinaryReader): ListProcessTypeResponse;
}

export namespace ListProcessTypeResponse {
  export type AsObject = {
    processTypeListList: Array<ProcessType.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateProcessTypesRequest extends jspb.Message {
  getRequestsList(): Array<CreateProcessTypeRequest>;
  setRequestsList(value: Array<CreateProcessTypeRequest>): BatchCreateProcessTypesRequest;
  clearRequestsList(): BatchCreateProcessTypesRequest;
  addRequests(value?: CreateProcessTypeRequest, index?: number): CreateProcessTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProcessTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProcessTypesRequest): BatchCreateProcessTypesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProcessTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProcessTypesRequest;
  static deserializeBinaryFromReader(message: BatchCreateProcessTypesRequest, reader: jspb.BinaryReader): BatchCreateProcessTypesRequest;
}

export namespace BatchCreateProcessTypesRequest {
  export type AsObject = {
    requestsList: Array<CreateProcessTypeRequest.AsObject>,
  }
}

export class BatchCreateProcessTypesResponse extends jspb.Message {
  getProcessTypesList(): Array<ProcessType>;
  setProcessTypesList(value: Array<ProcessType>): BatchCreateProcessTypesResponse;
  clearProcessTypesList(): BatchCreateProcessTypesResponse;
  addProcessTypes(value?: ProcessType, index?: number): ProcessType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProcessTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProcessTypesResponse): BatchCreateProcessTypesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProcessTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProcessTypesResponse;
  static deserializeBinaryFromReader(message: BatchCreateProcessTypesResponse, reader: jspb.BinaryReader): BatchCreateProcessTypesResponse;
}

export namespace BatchCreateProcessTypesResponse {
  export type AsObject = {
    processTypesList: Array<ProcessType.AsObject>,
  }
}

export class Project extends jspb.Message {
  getId(): number;
  setId(value: number): Project;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): Project;
  hasStartDate(): boolean;
  clearStartDate(): Project;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): Project;
  hasEndDate(): boolean;
  clearEndDate(): Project;

  getRole(): string;
  setRole(value: string): Project;

  getScale(): string;
  setScale(value: string): Project;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Project;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Project;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Project;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Project;

  getPpsid(): ProjectSkills | undefined;
  setPpsid(value?: ProjectSkills): Project;
  hasPpsid(): boolean;
  clearPpsid(): Project;

  getPppid(): ProjectProcess | undefined;
  setPppid(value?: ProjectProcess): Project;
  hasPppid(): boolean;
  clearPppid(): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: number,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    role: string,
    scale: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ppsid?: ProjectSkills.AsObject,
    pppid?: ProjectProcess.AsObject,
  }
}

export class CreateProjectRequest extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): CreateProjectRequest;
  hasProject(): boolean;
  clearProject(): CreateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class GetProjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetProjectRequest;

  getView(): GetProjectRequest.View;
  setView(value: GetProjectRequest.View): GetProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
    id: number,
    view: GetProjectRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): UpdateProjectRequest;
  hasProject(): boolean;
  clearProject(): UpdateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class DeleteProjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectRequest): DeleteProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectRequest;
  static deserializeBinaryFromReader(message: DeleteProjectRequest, reader: jspb.BinaryReader): DeleteProjectRequest;
}

export namespace DeleteProjectRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListProjectRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListProjectRequest;

  getPageToken(): string;
  setPageToken(value: string): ListProjectRequest;

  getView(): ListProjectRequest.View;
  setView(value: ListProjectRequest.View): ListProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRequest): ListProjectRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRequest;
  static deserializeBinaryFromReader(message: ListProjectRequest, reader: jspb.BinaryReader): ListProjectRequest;
}

export namespace ListProjectRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: ListProjectRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class ListProjectResponse extends jspb.Message {
  getProjectListList(): Array<Project>;
  setProjectListList(value: Array<Project>): ListProjectResponse;
  clearProjectListList(): ListProjectResponse;
  addProjectList(value?: Project, index?: number): Project;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectResponse): ListProjectResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectResponse;
  static deserializeBinaryFromReader(message: ListProjectResponse, reader: jspb.BinaryReader): ListProjectResponse;
}

export namespace ListProjectResponse {
  export type AsObject = {
    projectListList: Array<Project.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateProjectsRequest extends jspb.Message {
  getRequestsList(): Array<CreateProjectRequest>;
  setRequestsList(value: Array<CreateProjectRequest>): BatchCreateProjectsRequest;
  clearRequestsList(): BatchCreateProjectsRequest;
  addRequests(value?: CreateProjectRequest, index?: number): CreateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProjectsRequest): BatchCreateProjectsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProjectsRequest;
  static deserializeBinaryFromReader(message: BatchCreateProjectsRequest, reader: jspb.BinaryReader): BatchCreateProjectsRequest;
}

export namespace BatchCreateProjectsRequest {
  export type AsObject = {
    requestsList: Array<CreateProjectRequest.AsObject>,
  }
}

export class BatchCreateProjectsResponse extends jspb.Message {
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): BatchCreateProjectsResponse;
  clearProjectsList(): BatchCreateProjectsResponse;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProjectsResponse): BatchCreateProjectsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProjectsResponse;
  static deserializeBinaryFromReader(message: BatchCreateProjectsResponse, reader: jspb.BinaryReader): BatchCreateProjectsResponse;
}

export namespace BatchCreateProjectsResponse {
  export type AsObject = {
    projectsList: Array<Project.AsObject>,
  }
}

export class ProjectProcess extends jspb.Message {
  getId(): number;
  setId(value: number): ProjectProcess;

  getProject(): Project | undefined;
  setProject(value?: Project): ProjectProcess;
  hasProject(): boolean;
  clearProject(): ProjectProcess;

  getProcesstype(): ProcessType | undefined;
  setProcesstype(value?: ProcessType): ProjectProcess;
  hasProcesstype(): boolean;
  clearProcesstype(): ProjectProcess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectProcess): ProjectProcess.AsObject;
  static serializeBinaryToWriter(message: ProjectProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectProcess;
  static deserializeBinaryFromReader(message: ProjectProcess, reader: jspb.BinaryReader): ProjectProcess;
}

export namespace ProjectProcess {
  export type AsObject = {
    id: number,
    project?: Project.AsObject,
    processtype?: ProcessType.AsObject,
  }
}

export class CreateProjectProcessRequest extends jspb.Message {
  getProjectProcess(): ProjectProcess | undefined;
  setProjectProcess(value?: ProjectProcess): CreateProjectProcessRequest;
  hasProjectProcess(): boolean;
  clearProjectProcess(): CreateProjectProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectProcessRequest): CreateProjectProcessRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectProcessRequest;
  static deserializeBinaryFromReader(message: CreateProjectProcessRequest, reader: jspb.BinaryReader): CreateProjectProcessRequest;
}

export namespace CreateProjectProcessRequest {
  export type AsObject = {
    projectProcess?: ProjectProcess.AsObject,
  }
}

export class GetProjectProcessRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetProjectProcessRequest;

  getView(): GetProjectProcessRequest.View;
  setView(value: GetProjectProcessRequest.View): GetProjectProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectProcessRequest): GetProjectProcessRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectProcessRequest;
  static deserializeBinaryFromReader(message: GetProjectProcessRequest, reader: jspb.BinaryReader): GetProjectProcessRequest;
}

export namespace GetProjectProcessRequest {
  export type AsObject = {
    id: number,
    view: GetProjectProcessRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateProjectProcessRequest extends jspb.Message {
  getProjectProcess(): ProjectProcess | undefined;
  setProjectProcess(value?: ProjectProcess): UpdateProjectProcessRequest;
  hasProjectProcess(): boolean;
  clearProjectProcess(): UpdateProjectProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectProcessRequest): UpdateProjectProcessRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectProcessRequest;
  static deserializeBinaryFromReader(message: UpdateProjectProcessRequest, reader: jspb.BinaryReader): UpdateProjectProcessRequest;
}

export namespace UpdateProjectProcessRequest {
  export type AsObject = {
    projectProcess?: ProjectProcess.AsObject,
  }
}

export class DeleteProjectProcessRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteProjectProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectProcessRequest): DeleteProjectProcessRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectProcessRequest;
  static deserializeBinaryFromReader(message: DeleteProjectProcessRequest, reader: jspb.BinaryReader): DeleteProjectProcessRequest;
}

export namespace DeleteProjectProcessRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListProjectProcessRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListProjectProcessRequest;

  getPageToken(): string;
  setPageToken(value: string): ListProjectProcessRequest;

  getView(): ListProjectProcessRequest.View;
  setView(value: ListProjectProcessRequest.View): ListProjectProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectProcessRequest): ListProjectProcessRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectProcessRequest;
  static deserializeBinaryFromReader(message: ListProjectProcessRequest, reader: jspb.BinaryReader): ListProjectProcessRequest;
}

export namespace ListProjectProcessRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: ListProjectProcessRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class ListProjectProcessResponse extends jspb.Message {
  getProjectProcessListList(): Array<ProjectProcess>;
  setProjectProcessListList(value: Array<ProjectProcess>): ListProjectProcessResponse;
  clearProjectProcessListList(): ListProjectProcessResponse;
  addProjectProcessList(value?: ProjectProcess, index?: number): ProjectProcess;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListProjectProcessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectProcessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectProcessResponse): ListProjectProcessResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectProcessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectProcessResponse;
  static deserializeBinaryFromReader(message: ListProjectProcessResponse, reader: jspb.BinaryReader): ListProjectProcessResponse;
}

export namespace ListProjectProcessResponse {
  export type AsObject = {
    projectProcessListList: Array<ProjectProcess.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateProjectProcessesRequest extends jspb.Message {
  getRequestsList(): Array<CreateProjectProcessRequest>;
  setRequestsList(value: Array<CreateProjectProcessRequest>): BatchCreateProjectProcessesRequest;
  clearRequestsList(): BatchCreateProjectProcessesRequest;
  addRequests(value?: CreateProjectProcessRequest, index?: number): CreateProjectProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProjectProcessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProjectProcessesRequest): BatchCreateProjectProcessesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProjectProcessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProjectProcessesRequest;
  static deserializeBinaryFromReader(message: BatchCreateProjectProcessesRequest, reader: jspb.BinaryReader): BatchCreateProjectProcessesRequest;
}

export namespace BatchCreateProjectProcessesRequest {
  export type AsObject = {
    requestsList: Array<CreateProjectProcessRequest.AsObject>,
  }
}

export class BatchCreateProjectProcessesResponse extends jspb.Message {
  getProjectProcessesList(): Array<ProjectProcess>;
  setProjectProcessesList(value: Array<ProjectProcess>): BatchCreateProjectProcessesResponse;
  clearProjectProcessesList(): BatchCreateProjectProcessesResponse;
  addProjectProcesses(value?: ProjectProcess, index?: number): ProjectProcess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProjectProcessesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProjectProcessesResponse): BatchCreateProjectProcessesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProjectProcessesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProjectProcessesResponse;
  static deserializeBinaryFromReader(message: BatchCreateProjectProcessesResponse, reader: jspb.BinaryReader): BatchCreateProjectProcessesResponse;
}

export namespace BatchCreateProjectProcessesResponse {
  export type AsObject = {
    projectProcessesList: Array<ProjectProcess.AsObject>,
  }
}

export class ProjectSkills extends jspb.Message {
  getId(): number;
  setId(value: number): ProjectSkills;

  getSkill(): Skill | undefined;
  setSkill(value?: Skill): ProjectSkills;
  hasSkill(): boolean;
  clearSkill(): ProjectSkills;

  getProject(): Project | undefined;
  setProject(value?: Project): ProjectSkills;
  hasProject(): boolean;
  clearProject(): ProjectSkills;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectSkills.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectSkills): ProjectSkills.AsObject;
  static serializeBinaryToWriter(message: ProjectSkills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectSkills;
  static deserializeBinaryFromReader(message: ProjectSkills, reader: jspb.BinaryReader): ProjectSkills;
}

export namespace ProjectSkills {
  export type AsObject = {
    id: number,
    skill?: Skill.AsObject,
    project?: Project.AsObject,
  }
}

export class CreateProjectSkillsRequest extends jspb.Message {
  getProjectSkills(): ProjectSkills | undefined;
  setProjectSkills(value?: ProjectSkills): CreateProjectSkillsRequest;
  hasProjectSkills(): boolean;
  clearProjectSkills(): CreateProjectSkillsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectSkillsRequest): CreateProjectSkillsRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectSkillsRequest;
  static deserializeBinaryFromReader(message: CreateProjectSkillsRequest, reader: jspb.BinaryReader): CreateProjectSkillsRequest;
}

export namespace CreateProjectSkillsRequest {
  export type AsObject = {
    projectSkills?: ProjectSkills.AsObject,
  }
}

export class GetProjectSkillsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetProjectSkillsRequest;

  getView(): GetProjectSkillsRequest.View;
  setView(value: GetProjectSkillsRequest.View): GetProjectSkillsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectSkillsRequest): GetProjectSkillsRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectSkillsRequest;
  static deserializeBinaryFromReader(message: GetProjectSkillsRequest, reader: jspb.BinaryReader): GetProjectSkillsRequest;
}

export namespace GetProjectSkillsRequest {
  export type AsObject = {
    id: number,
    view: GetProjectSkillsRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateProjectSkillsRequest extends jspb.Message {
  getProjectSkills(): ProjectSkills | undefined;
  setProjectSkills(value?: ProjectSkills): UpdateProjectSkillsRequest;
  hasProjectSkills(): boolean;
  clearProjectSkills(): UpdateProjectSkillsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectSkillsRequest): UpdateProjectSkillsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectSkillsRequest;
  static deserializeBinaryFromReader(message: UpdateProjectSkillsRequest, reader: jspb.BinaryReader): UpdateProjectSkillsRequest;
}

export namespace UpdateProjectSkillsRequest {
  export type AsObject = {
    projectSkills?: ProjectSkills.AsObject,
  }
}

export class DeleteProjectSkillsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteProjectSkillsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectSkillsRequest): DeleteProjectSkillsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectSkillsRequest;
  static deserializeBinaryFromReader(message: DeleteProjectSkillsRequest, reader: jspb.BinaryReader): DeleteProjectSkillsRequest;
}

export namespace DeleteProjectSkillsRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListProjectSkillsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListProjectSkillsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListProjectSkillsRequest;

  getView(): ListProjectSkillsRequest.View;
  setView(value: ListProjectSkillsRequest.View): ListProjectSkillsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectSkillsRequest): ListProjectSkillsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectSkillsRequest;
  static deserializeBinaryFromReader(message: ListProjectSkillsRequest, reader: jspb.BinaryReader): ListProjectSkillsRequest;
}

export namespace ListProjectSkillsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: ListProjectSkillsRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class ListProjectSkillsResponse extends jspb.Message {
  getProjectSkillsListList(): Array<ProjectSkills>;
  setProjectSkillsListList(value: Array<ProjectSkills>): ListProjectSkillsResponse;
  clearProjectSkillsListList(): ListProjectSkillsResponse;
  addProjectSkillsList(value?: ProjectSkills, index?: number): ProjectSkills;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListProjectSkillsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectSkillsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectSkillsResponse): ListProjectSkillsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectSkillsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectSkillsResponse;
  static deserializeBinaryFromReader(message: ListProjectSkillsResponse, reader: jspb.BinaryReader): ListProjectSkillsResponse;
}

export namespace ListProjectSkillsResponse {
  export type AsObject = {
    projectSkillsListList: Array<ProjectSkills.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateProjectSkillsSliceRequest extends jspb.Message {
  getRequestsList(): Array<CreateProjectSkillsRequest>;
  setRequestsList(value: Array<CreateProjectSkillsRequest>): BatchCreateProjectSkillsSliceRequest;
  clearRequestsList(): BatchCreateProjectSkillsSliceRequest;
  addRequests(value?: CreateProjectSkillsRequest, index?: number): CreateProjectSkillsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProjectSkillsSliceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProjectSkillsSliceRequest): BatchCreateProjectSkillsSliceRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProjectSkillsSliceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProjectSkillsSliceRequest;
  static deserializeBinaryFromReader(message: BatchCreateProjectSkillsSliceRequest, reader: jspb.BinaryReader): BatchCreateProjectSkillsSliceRequest;
}

export namespace BatchCreateProjectSkillsSliceRequest {
  export type AsObject = {
    requestsList: Array<CreateProjectSkillsRequest.AsObject>,
  }
}

export class BatchCreateProjectSkillsSliceResponse extends jspb.Message {
  getProjectSkillsSliceList(): Array<ProjectSkills>;
  setProjectSkillsSliceList(value: Array<ProjectSkills>): BatchCreateProjectSkillsSliceResponse;
  clearProjectSkillsSliceList(): BatchCreateProjectSkillsSliceResponse;
  addProjectSkillsSlice(value?: ProjectSkills, index?: number): ProjectSkills;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateProjectSkillsSliceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateProjectSkillsSliceResponse): BatchCreateProjectSkillsSliceResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateProjectSkillsSliceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateProjectSkillsSliceResponse;
  static deserializeBinaryFromReader(message: BatchCreateProjectSkillsSliceResponse, reader: jspb.BinaryReader): BatchCreateProjectSkillsSliceResponse;
}

export namespace BatchCreateProjectSkillsSliceResponse {
  export type AsObject = {
    projectSkillsSliceList: Array<ProjectSkills.AsObject>,
  }
}

export class Skill extends jspb.Message {
  getId(): number;
  setId(value: number): Skill;

  getName(): string;
  setName(value: string): Skill;

  getLevel(): number;
  setLevel(value: number): Skill;

  getScale(): number;
  setScale(value: number): Skill;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Skill;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Skill;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Skill;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Skill;

  getSkilltype(): SkillType | undefined;
  setSkilltype(value?: SkillType): Skill;
  hasSkilltype(): boolean;
  clearSkilltype(): Skill;

  getSpsid(): ProjectSkills | undefined;
  setSpsid(value?: ProjectSkills): Skill;
  hasSpsid(): boolean;
  clearSpsid(): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    id: number,
    name: string,
    level: number,
    scale: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skilltype?: SkillType.AsObject,
    spsid?: ProjectSkills.AsObject,
  }
}

export class CreateSkillRequest extends jspb.Message {
  getSkill(): Skill | undefined;
  setSkill(value?: Skill): CreateSkillRequest;
  hasSkill(): boolean;
  clearSkill(): CreateSkillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillRequest): CreateSkillRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSkillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillRequest;
  static deserializeBinaryFromReader(message: CreateSkillRequest, reader: jspb.BinaryReader): CreateSkillRequest;
}

export namespace CreateSkillRequest {
  export type AsObject = {
    skill?: Skill.AsObject,
  }
}

export class GetSkillRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetSkillRequest;

  getView(): GetSkillRequest.View;
  setView(value: GetSkillRequest.View): GetSkillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillRequest): GetSkillRequest.AsObject;
  static serializeBinaryToWriter(message: GetSkillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillRequest;
  static deserializeBinaryFromReader(message: GetSkillRequest, reader: jspb.BinaryReader): GetSkillRequest;
}

export namespace GetSkillRequest {
  export type AsObject = {
    id: number,
    view: GetSkillRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateSkillRequest extends jspb.Message {
  getSkill(): Skill | undefined;
  setSkill(value?: Skill): UpdateSkillRequest;
  hasSkill(): boolean;
  clearSkill(): UpdateSkillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillRequest): UpdateSkillRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSkillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillRequest;
  static deserializeBinaryFromReader(message: UpdateSkillRequest, reader: jspb.BinaryReader): UpdateSkillRequest;
}

export namespace UpdateSkillRequest {
  export type AsObject = {
    skill?: Skill.AsObject,
  }
}

export class DeleteSkillRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteSkillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkillRequest): DeleteSkillRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSkillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkillRequest;
  static deserializeBinaryFromReader(message: DeleteSkillRequest, reader: jspb.BinaryReader): DeleteSkillRequest;
}

export namespace DeleteSkillRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListSkillRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListSkillRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSkillRequest;

  getView(): ListSkillRequest.View;
  setView(value: ListSkillRequest.View): ListSkillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillRequest): ListSkillRequest.AsObject;
  static serializeBinaryToWriter(message: ListSkillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillRequest;
  static deserializeBinaryFromReader(message: ListSkillRequest, reader: jspb.BinaryReader): ListSkillRequest;
}

export namespace ListSkillRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: ListSkillRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class ListSkillResponse extends jspb.Message {
  getSkillListList(): Array<Skill>;
  setSkillListList(value: Array<Skill>): ListSkillResponse;
  clearSkillListList(): ListSkillResponse;
  addSkillList(value?: Skill, index?: number): Skill;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSkillResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillResponse): ListSkillResponse.AsObject;
  static serializeBinaryToWriter(message: ListSkillResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillResponse;
  static deserializeBinaryFromReader(message: ListSkillResponse, reader: jspb.BinaryReader): ListSkillResponse;
}

export namespace ListSkillResponse {
  export type AsObject = {
    skillListList: Array<Skill.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateSkillsRequest extends jspb.Message {
  getRequestsList(): Array<CreateSkillRequest>;
  setRequestsList(value: Array<CreateSkillRequest>): BatchCreateSkillsRequest;
  clearRequestsList(): BatchCreateSkillsRequest;
  addRequests(value?: CreateSkillRequest, index?: number): CreateSkillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateSkillsRequest): BatchCreateSkillsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateSkillsRequest;
  static deserializeBinaryFromReader(message: BatchCreateSkillsRequest, reader: jspb.BinaryReader): BatchCreateSkillsRequest;
}

export namespace BatchCreateSkillsRequest {
  export type AsObject = {
    requestsList: Array<CreateSkillRequest.AsObject>,
  }
}

export class BatchCreateSkillsResponse extends jspb.Message {
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): BatchCreateSkillsResponse;
  clearSkillsList(): BatchCreateSkillsResponse;
  addSkills(value?: Skill, index?: number): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateSkillsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateSkillsResponse): BatchCreateSkillsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateSkillsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateSkillsResponse;
  static deserializeBinaryFromReader(message: BatchCreateSkillsResponse, reader: jspb.BinaryReader): BatchCreateSkillsResponse;
}

export namespace BatchCreateSkillsResponse {
  export type AsObject = {
    skillsList: Array<Skill.AsObject>,
  }
}

export class SkillType extends jspb.Message {
  getId(): number;
  setId(value: number): SkillType;

  getName(): string;
  setName(value: string): SkillType;

  getStsidList(): Array<Skill>;
  setStsidList(value: Array<Skill>): SkillType;
  clearStsidList(): SkillType;
  addStsid(value?: Skill, index?: number): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillType.AsObject;
  static toObject(includeInstance: boolean, msg: SkillType): SkillType.AsObject;
  static serializeBinaryToWriter(message: SkillType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillType;
  static deserializeBinaryFromReader(message: SkillType, reader: jspb.BinaryReader): SkillType;
}

export namespace SkillType {
  export type AsObject = {
    id: number,
    name: string,
    stsidList: Array<Skill.AsObject>,
  }
}

export class CreateSkillTypeRequest extends jspb.Message {
  getSkillType(): SkillType | undefined;
  setSkillType(value?: SkillType): CreateSkillTypeRequest;
  hasSkillType(): boolean;
  clearSkillType(): CreateSkillTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillTypeRequest): CreateSkillTypeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSkillTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillTypeRequest;
  static deserializeBinaryFromReader(message: CreateSkillTypeRequest, reader: jspb.BinaryReader): CreateSkillTypeRequest;
}

export namespace CreateSkillTypeRequest {
  export type AsObject = {
    skillType?: SkillType.AsObject,
  }
}

export class GetSkillTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetSkillTypeRequest;

  getView(): GetSkillTypeRequest.View;
  setView(value: GetSkillTypeRequest.View): GetSkillTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillTypeRequest): GetSkillTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetSkillTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillTypeRequest;
  static deserializeBinaryFromReader(message: GetSkillTypeRequest, reader: jspb.BinaryReader): GetSkillTypeRequest;
}

export namespace GetSkillTypeRequest {
  export type AsObject = {
    id: number,
    view: GetSkillTypeRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateSkillTypeRequest extends jspb.Message {
  getSkillType(): SkillType | undefined;
  setSkillType(value?: SkillType): UpdateSkillTypeRequest;
  hasSkillType(): boolean;
  clearSkillType(): UpdateSkillTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillTypeRequest): UpdateSkillTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSkillTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillTypeRequest;
  static deserializeBinaryFromReader(message: UpdateSkillTypeRequest, reader: jspb.BinaryReader): UpdateSkillTypeRequest;
}

export namespace UpdateSkillTypeRequest {
  export type AsObject = {
    skillType?: SkillType.AsObject,
  }
}

export class DeleteSkillTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteSkillTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkillTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkillTypeRequest): DeleteSkillTypeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSkillTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkillTypeRequest;
  static deserializeBinaryFromReader(message: DeleteSkillTypeRequest, reader: jspb.BinaryReader): DeleteSkillTypeRequest;
}

export namespace DeleteSkillTypeRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListSkillTypeRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListSkillTypeRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSkillTypeRequest;

  getView(): ListSkillTypeRequest.View;
  setView(value: ListSkillTypeRequest.View): ListSkillTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillTypeRequest): ListSkillTypeRequest.AsObject;
  static serializeBinaryToWriter(message: ListSkillTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillTypeRequest;
  static deserializeBinaryFromReader(message: ListSkillTypeRequest, reader: jspb.BinaryReader): ListSkillTypeRequest;
}

export namespace ListSkillTypeRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: ListSkillTypeRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class ListSkillTypeResponse extends jspb.Message {
  getSkillTypeListList(): Array<SkillType>;
  setSkillTypeListList(value: Array<SkillType>): ListSkillTypeResponse;
  clearSkillTypeListList(): ListSkillTypeResponse;
  addSkillTypeList(value?: SkillType, index?: number): SkillType;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSkillTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillTypeResponse): ListSkillTypeResponse.AsObject;
  static serializeBinaryToWriter(message: ListSkillTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillTypeResponse;
  static deserializeBinaryFromReader(message: ListSkillTypeResponse, reader: jspb.BinaryReader): ListSkillTypeResponse;
}

export namespace ListSkillTypeResponse {
  export type AsObject = {
    skillTypeListList: Array<SkillType.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateSkillTypesRequest extends jspb.Message {
  getRequestsList(): Array<CreateSkillTypeRequest>;
  setRequestsList(value: Array<CreateSkillTypeRequest>): BatchCreateSkillTypesRequest;
  clearRequestsList(): BatchCreateSkillTypesRequest;
  addRequests(value?: CreateSkillTypeRequest, index?: number): CreateSkillTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateSkillTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateSkillTypesRequest): BatchCreateSkillTypesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateSkillTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateSkillTypesRequest;
  static deserializeBinaryFromReader(message: BatchCreateSkillTypesRequest, reader: jspb.BinaryReader): BatchCreateSkillTypesRequest;
}

export namespace BatchCreateSkillTypesRequest {
  export type AsObject = {
    requestsList: Array<CreateSkillTypeRequest.AsObject>,
  }
}

export class BatchCreateSkillTypesResponse extends jspb.Message {
  getSkillTypesList(): Array<SkillType>;
  setSkillTypesList(value: Array<SkillType>): BatchCreateSkillTypesResponse;
  clearSkillTypesList(): BatchCreateSkillTypesResponse;
  addSkillTypes(value?: SkillType, index?: number): SkillType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateSkillTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateSkillTypesResponse): BatchCreateSkillTypesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateSkillTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateSkillTypesResponse;
  static deserializeBinaryFromReader(message: BatchCreateSkillTypesResponse, reader: jspb.BinaryReader): BatchCreateSkillTypesResponse;
}

export namespace BatchCreateSkillTypesResponse {
  export type AsObject = {
    skillTypesList: Array<SkillType.AsObject>,
  }
}

