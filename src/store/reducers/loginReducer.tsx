import {
  SIGN_IN,
  SIGN_IN_SUCCEEDED,
  SIGN_IN_FAILED
} from "store/constants/action-types";

import { userData, userDataKeys, responseError } from "utils/models/userData";
import {
  addToLocalStorage,
  getLocalStorageValuesByKeys
} from "utils/changeLocalStorage";

const initialState = {
  isLoading: false,
  userData: { ...getLocalStorageValuesByKeys(userDataKeys) } as userData,
  error: {} as responseError
};

export default function loginReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoading: true
      };
    case SIGN_IN_SUCCEEDED:
      addToLocalStorage(action.payload);
      return {
        isLoading: false,
        userData: { ...(action.payload as userData) },
        error: {} as responseError
      };
    case SIGN_IN_FAILED:
      return {
        isLoading: false,
        userData: {} as userData,
        error: { ...(action.payload as responseError) }
      };
    default:
      return state;
  }
}
