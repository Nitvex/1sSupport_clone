import { SIGN_IN } from "../constants/action-types";

export const signIn = (login: string, password: string) => ({
  type: SIGN_IN,
  payload: { login, password }
});
