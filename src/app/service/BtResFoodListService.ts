
export const foodlisturl = "https://utcc-prc.demotoday.net/bt-order-api/api/BtResFoodList";


export interface BtResFoodList {
  IsSuccess:         boolean;
  StatusCode:        number;
  StatusCodeDecimal: null;
  Message:           string;
  StatusDateTime:    Date;
  Value:             Value[];
}

export interface Value {
  FOOD_ID:        number;
  RES_ID:         number;
  FOOD_NAME:      string;
  FOOD_PRICE:     number;
  FOOD_NORMAL:    number;
  FOOD_SPECIAL:   number;
  FOOD_OPTION:    string;
  FOOD_NOTE:      string;
  RECORD_STATUS:  string;
  CREATE_USER_ID: number;
  UPDATE_USER_ID: number;
  USER_STATUS:    string;
  FOOD_IMAGE:     string;
  CREATE_DATE:    Date;
  UPDATE_DATE:    Date;
}
