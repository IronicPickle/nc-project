import { createRouter } from "https://deno.land/x/servest@v1.3.4/router.ts";
import { respond } from "../setup/servest.ts";

const chat = () => {
  const router = createRouter();

  router.ws("/", async (socket) => {
    for await (const msg of socket) {
      //respond(socket, "Success", {});
      if (typeof msg === "string") {
        console.log(msg);
        socket.send("Server to client");
      }
    }
  });
};

export default chat;
