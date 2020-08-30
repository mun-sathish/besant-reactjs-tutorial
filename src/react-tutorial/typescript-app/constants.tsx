import { IFormFields } from "./type/interface";
import { FORM_FIELD_KEYS, FORM_FIELD_NAMES } from "./type/enum";

export const APP_URI: string[] = ["/", "/dashboard", "someotherURL"];

export const FORM_FIELDS: IFormFields[] = [
  {
    key: FORM_FIELD_KEYS.NAME,
    columnName: FORM_FIELD_NAMES.NAME,
    toolTipText: "someData",
    isShow: true,
  },
  {
    key: FORM_FIELD_KEYS.ADDRESS,
    columnName: FORM_FIELD_NAMES.ADDRESS,
    toolTipText: "someData",
    isShow: true,
  },
  {
    key: FORM_FIELD_KEYS.PHONE,
    columnName: FORM_FIELD_NAMES.PHONE,
    toolTipText: "someData",
    isShow: false,
  },
];
