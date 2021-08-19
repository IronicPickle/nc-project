import { Config } from "./config.ts";

export default {
  mysql: {
    hostname: "127.0.0.1",
    username: "root",
    db: "test",
    port: 3306,
  },
  servest: {
    listenOptions: {
      port: 4000,
    },
  },
} as Config;
