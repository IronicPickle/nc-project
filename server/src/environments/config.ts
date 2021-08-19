import { ClientConfig } from "https://deno.land/x/mysql/mod.ts";
import { ServeOptions } from "https://deno.land/x/servest/mod.ts";

import devConfig from "./development.ts";
import prodConfig from "./production.ts";

let config = {} as Config;

export interface Config {
  mysql: ClientConfig;
  servest: {
    listenOptions: Deno.ListenOptions;
    serveOptions: ServeOptions;
  };
}

const environment = Deno.env.get("ENVIRONMENT") || "development";

switch (environment) {
  case "development":
    config = devConfig;
    break;
  case "production":
    config = prodConfig;
    break;
  default:
    throw new Error(`Unknown environment: ${environment}`);
}
console.log("Config -> Ready");

export default config;
