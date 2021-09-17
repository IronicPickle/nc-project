import axios, { AxiosError } from "axios";
import config from "../environments/config";
import type { Body, ErrorRes, Res } from "../../../common/apiSchemas/utils";
import type { Login } from "../../../common/apiSchemas/auth";

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
});

export const isAxiosError = <B>(err: any): err is AxiosError<B> => {
  return err.isAxiosError;
};

export const auth = {
  login: async (body: Body<Login>) => {
    const res = await axiosInstance.post<Res<Login>>("/auth/login", body);
    return res;
  },
};
