// Generated by https://quicktype.io
export const payurl="https://utcc-prc.demotoday.net/bt-order-api/api/BtResPay"
export interface BtResUserPay {
  IsSuccess:         boolean;
  StatusCode:        number;
  StatusCodeDecimal: any;
  Message:           string;
  StatusDateTime:    Date;
  Value:             Value[];
}

export interface Value {
  PAY_ID:         number;
  USER_ID:        number;
  PAY_IMAGE:      any;
  RECORD_STATUS:  string;
  CREATE_USER_ID: number;
  UPDATE_USER_ID: number;
  USER_STATUS:    string;
  PAY_STATUS:     string;
  CREATE_DATE:    Date;
  UPDATE_DATE:    Date;
  PAY_AMOUNT:     number;
}
