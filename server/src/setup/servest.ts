import { createApp, ServerRequest } from "https://deno.land/x/servest/mod.ts";
import config from "../environments/config.ts";

export const getJson = async <User>(req: ServerRequest) => {
  let body: User | null;
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
    status: 400,
    body: "Could not parse data",
  });
  console.log(`HTTP ERROR | ${status} - ${msg}`);
};

const isSocket = (req: any): req is WebSocket => {
  return req.ping != null;
};

// deno-lint-ignore no-explicit-any
export const respond = (
  req: ServerRequest | WebSocket,
  msg: string,
  data: Record<string, unknown>
) => {
  if (isSocket(req)) {
    req.send(
      JSON.stringify({
        status: 200,
        body: { msg, data },
      })
    );
  } else {
    req.respond({
      status: 200,
      body: JSON.stringify({ msg, data }),
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
