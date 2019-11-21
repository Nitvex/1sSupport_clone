import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_IN } from "store/constants/action-types";

async function authorize(login: string, password: string): Promise<any> {
  const response = await fetch(
    "https://api.1ssupport.ru/v0.1/identity/sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login,
        password
      })
    }
  );
  const body = await response.json();
}

function* signInUser(action: {
  type: string;
  payload: { login: string; password: string };
}) {
  try {
    const { login, password } = action.payload;
    const signInResponse = yield call(authorize, login, password);
    //yield put({ type: "SIGN_IN_SUCCEEDED", signInResponse });
  } catch (e) {
    console.log(e);
  }
}

function* signInSaga() {
  yield takeLatest(SIGN_IN, signInUser);
}

export default signInSaga;
