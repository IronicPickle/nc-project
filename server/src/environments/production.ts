import { Config } from "./config.ts";

export default {
  mysql: {
    hostname: "localhost",
    username: "root",
    port: 3306,
  },
  servest: {
    listenOptions: {
      port: 4000,
    },
  },
} as Config;
