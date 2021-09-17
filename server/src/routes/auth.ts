import { createRouter } from "https://deno.land/x/servest@v1.3.4/router.ts";
import { getJson, handleError, respond } from "../setup/servest.ts";
import { BackendBody } from "../../../common/apiSchemas/utils.ts";
import { Login } from "../../../common/apiSchemas/auth.ts";

const users = () => {
  const router = createRouter();

  router.post("/register", async (req) => {
    const body = await getJson<BackendBody<Login>>(req);
    if (body == null) return;
    if (typeof body.username !== "string" || typeof body.password !== "string")
      return handleError(req, 401, "Invalid Credidentials");
    respond(req, "Success", { token: 12345 });
  });

  router.post("/login", async (req) => {
    const body = await getJson<BackendBody<Login>>(req);
    if (body == null) return;
    if (body.username !== "admin" || body.password !== "password")
      return handleError(req, 401, "Invalid Credidentials");
    respond(req, "Success", { token: 12345 });
  });

  return router;
};

export default users;
