// @ts-ignore
import { Structure } from "./utils.ts";

export interface Login extends Structure {
  body: {
    username: string;
    password: string;
  };
  res: {
    msg: string;
    data: {
      token: number;
    };
  };
  errorRes: {
    msg: string;
  };
}
