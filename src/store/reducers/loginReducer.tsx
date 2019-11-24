import {
  SIGN_IN,
  SIGN_IN_SUCCEEDED,
  SIGN_IN_FAILED
} from "store/constants/action-types";

import { userData, responseError } from "utils/models";
import { addToLocalStorage } from "utils/changeLocalStorage";

const initialState = {
  signIn: {
    isLoading: false,
    userData: {} as userData,
    error: {} as responseError
  }
};

export default function loginReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          isLoading: true
        }
      };
    case SIGN_IN_SUCCEEDED:
      addToLocalStorage(action.payload);
      return {
        ...state,
        signIn: {
          isLoading: false,
          userData: { ...(action.payload as userData) },
          error: {} as responseError
        }
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        signIn: {
          isLoading: false,
          userData: {} as userData,
          error: { ...(action.payload as responseError) }
        }
      };
    default:
      return state;
  }
}