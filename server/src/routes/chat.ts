import { createRouter } from "https://deno.land/x/servest@v1.3.4/router.ts";
import { respond } from "../setup/servest.ts";

const chat = () => {
  const router = createRouter();

  router.ws("/", async (socket) => {
    for await (const msg of socket) {
      if (typeof msg === "string") {
        respond(socket, "Server to client", {});
        console.log(msg);
      }
    }
  });

  return router;
};

export default chat;
