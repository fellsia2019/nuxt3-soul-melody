export interface IApiService {
  domain: string;
  routes: { [key: string]: string };
}

export interface IApiServiceList {
  [key: string]: IApiService;
}

export interface IDomain {
  secure: boolean;
  port?: number;
  domain: string;
  prefix: string;
}
