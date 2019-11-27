import requestToAPI from "utils/requestToAPI";
export default class SignInService {
  public static async signIn(login: string, password: string): Promise<any> {
    return await requestToAPI({
      url: "https://api.1ssupport.ru/v0.1/identity/sign-in",
      method: "POST",
      body: { login, password }
    });
  }
}
