import { call, put, takeLatest } from "redux-saga/effects";
import {
  SIGN_IN,
  SIGN_IN_SUCCEEDED,
  SIGN_IN_FAILED
} from "store/constants/action-types";

import requestToAPI from "utils/requestToAPI";

async function authorize(login: string, password: string): Promise<any> {
  return await requestToAPI({
    url: "https://api.1ssupport.ru/v0.1/identity/sign-in",
    method: "POST",
    body: { login, password }
  });
}

function* signInUser(action: {
  type: string;
  payload: { login: string; password: string };
}) {
  try {
    const { login, password } = action.payload;
    const signInResponse = yield call(authorize, login, password);
    console.log(signInResponse);
    if (signInResponse.accessToken) {
      yield put({ type: SIGN_IN_SUCCEEDED, payload: signInResponse });
    } else {
      yield put({ type: SIGN_IN_FAILED, payload: signInResponse });
    }
  } catch (e) {
    console.log(e);
  }
}

function* signInSaga() {
  yield takeLatest(SIGN_IN, signInUser);
}

export default signInSaga;
