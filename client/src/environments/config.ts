import devConfig from "./development";
import prodConfig from "./production";

let config = {} as Config;

export interface Config {
  apiUrl: string;
  apiWsUrl: string;
}

declare const process: any;
const environment = process.env.NODE_ENV || "development";

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
