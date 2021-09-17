import { Client } from "https://deno.land/x/mysql/mod.ts";
import config from "../environments/config.ts";

const printConfig = () => {
  const str = Object.entries(config.mysql).reduce(
    (accum, [key, value]) => `${accum}\n | ${key}: ${value}`,
    ""
  );
  console.log(`MySQL -> Config${str}`);
};

const mysql = new Client();

try {
  printConfig();
  await mysql.connect({
    ...config.mysql,
    db: undefined,
  });
  const db = config.mysql.db || "test";
  await mysql.execute(`CREATE DATABASE IF NOT EXISTS ${db}`);
  await mysql.execute(`USE ${db}`);
  console.log("MySQL -> Ready");
} catch (err) {
  console.error(err);
  throw Error(
    `Failed to connect to MySQL on: ${config.mysql.hostname}:${
      config.mysql.port || "3306"
    }`
  );
}

const setupTables = async () => {
  await mysql.execute(`CREATE TABLE IF NOT EXISTS Users {
    ID: INTEGER PRIMARY KEY AUTO_INCREMENT,
    Username: VARCHAR(255),
    Password: VARCHAR(255),
  }`);
};

export default mysql;
