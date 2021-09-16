import axios from "axios";
import config from "../environments/config";
import type { Body, Res } from "../../../common/apiSchemas/utils";
import type { Login } from "../../../common/apiSchemas/auth";

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
});

export const auth = {
  login: async (body: Body<Login>) => {
    const res = await axiosInstance.post<Res<Login>>("/auth/login", body);

    return res;
  },
};
