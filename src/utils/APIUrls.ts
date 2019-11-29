export const serverDomain: string = "https://api.1ssupport.ru/v0.1";

const identityService: string = "identity";
const directoryService: string = "directory";

export const APIUrls: { [key: string]: string } = Object.freeze({
  SIGN_IN: `${serverDomain}/${identityService}/sign-in`,

  SEARCH: `${serverDomain}/${directoryService}/search`
});
