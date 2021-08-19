import { createRouter } from "https://deno.land/x/servest@v1.3.4/router.ts";
import "./environments/config.ts"; // Config MUST be imported first
import "./setup/mysql.ts";
import "./setup/servest.ts";
import servest from "./setup/servest.ts";

const usersRoute = () => {
  const router = createRouter();

  return router;
};

servest.route("/api", usersRoute());
servest.route("/api/ws", usersRoute());
