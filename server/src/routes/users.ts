import { createRouter } from "https://deno.land/x/servest@v1.3.4/router.ts";
import { getJson, respond } from "../setup/servest.ts";

const users = () => {
  const router = createRouter();

  router.get("/", (req) => {
    const body = getJson(req);
    console.log({ body });
    respond(req, "Success", {});
  });

  return router;
};

export default users;
