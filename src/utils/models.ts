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

export type responseError = {
  code: string;
  data: {
    stackTrace?: string;
  };
  message: string;
};
