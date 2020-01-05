import requestToAPI from "utils/requestToAPI";
import { APIUrls } from "utils/APIUrls";
export default class SignInService {
  public static async signIn(login: string, password: string): Promise<any> {
    return requestToAPI({
      url: APIUrls.SIGN_IN,
      method: "POST",
      body: { login, password },
      requiresAuthorization: false
    });
  }
}
