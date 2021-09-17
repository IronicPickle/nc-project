import { createApp, ServerRequest } from "https://deno.land/x/servest/mod.ts";
import config from "../environments/config.ts";
import { WebSocket } from "https://deno.land/std@0.100.0/ws/mod.ts";

import { Response } from "../../../common/apiSchemas/utils.ts";

export const getJson = async <B>(req: ServerRequest) => {
  let body: B | null;
  try {
    body = await req.json();
  } catch (_err) {
    handleError(req, 400, "Could not parse data");
    return null;
  }
  return body;
};

export const handleError = (
  req: ServerRequest,
  status: number,
  msg: string
) => {
  req.respond({
    status,
    body: JSON.stringify({ msg: "Could not parse data" }),
  });
  console.log(`HTTP ERROR | ${status} - ${msg}`);
};

const isSocket = (req: ServerRequest | WebSocket): req is WebSocket => {
  return (req as any).send != null;
};

export const respond = (
  req: ServerRequest | WebSocket,
  msg: Response["msg"],
  data?: Response["data"]
) => {
  const body: Response = { msg };
  if (data != null) body.data = data;

  if (isSocket(req)) {
    req.send(JSON.stringify(body));
  } else {
    req.respond({
      status: 200,
      body: JSON.stringify(body),
    });
  }
};

const printConfig = () => {
  const str1 = Object.entries(config.servest.listenOptions || []).reduce(
    (accum, [key, value]) => `${accum}\n | ${key}: ${value}`,
    ""
  );
  const str2 = Object.entries(config.servest.serveOptions || []).reduce(
    (accum, [key, value]) => `${accum}\n | ${key}: ${value}`,
    ""
  );
  console.log(`Servest -> Config${str1}${str2}`);
};

printConfig();
const servest = createApp();

servest.listen(config.servest.listenOptions, config.servest.serveOptions);
console.log("Servest -> Ready");

export default servest;
