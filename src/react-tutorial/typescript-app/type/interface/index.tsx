import { FORM_FIELD_KEYS, FORM_FIELD_NAMES } from "../enum";

export interface IFormFields {
  key: FORM_FIELD_KEYS;
  columnName: FORM_FIELD_NAMES;
  toolTipText: string;
  isShow: boolean;
  others?: string;
}

export interface ISampleReducer {
  data1: string | undefined;
  data2: Array<number>;
}

export interface IAction {
  type: string;
  payload: ISampleReducer;
}
