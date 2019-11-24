export type userData = {
  userId: number;
  roleType: number;
  firstName: string;
  secondName: string;
  lastName: string;
  statusType: number;
  accessToken: string;
  refreshToken: string;
  expires: string;
  hasToChangePassword: string;
};

export const userDataKeys: Array<keyof userData> = [
  "userId",
  "roleType",
  "firstName",
  "secondName",
  "lastName",
  "statusType",
  "accessToken",
  "refreshToken",
  "expires",
  "hasToChangePassword"
];

export type responseError = {
  code: string;
  data: {
    stackTrace?: string;
  };
  message: string;
};
