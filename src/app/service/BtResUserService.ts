
// Generated by https://quicktype.io

export const baseUrl = "https://utcc-prc.demotoday.net/intern-api/api/BtResUser" //http://192.168.10.144/intern-api/api/BtResUser//
export interface BtResUser  {
  IsSuccess: boolean;
  StatusCode: number;
  StatusCodeDecimal: null;
  Message: string;
  StatusDateTime: Date;
  Value: Value[];

}

export interface Value {
  [x: string]: any;
  USER_ID: number;
  USER_NAME: string;
  USER_LASTNAME: string;
  USER_EMAIL: string;
  USER_USERNAME: string;
  USER_PASSWORD: string;
  USER_PHONE_NUMBER: string;
  RECORD_STATUS: string;
  CREATE_USER_ID: number;
  UPDATE_USER_ID: number;
  USER_IMAGE: null | string;
  USER_STATUS: string;
  USER_RIGHTS: string;
  CREATE_DATE: Date;
  UPDATE_DATE: Date;
}


