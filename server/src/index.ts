import "./environments/config.ts"; // Config MUST be imported first
import "./setup/mysql.ts";
import "./setup/servest.ts";
import servest, { getJson, respond } from "./setup/servest.ts";

type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [];

servest.post("/user/add", async (req) => {
  const body = await getJson<User>(req);
  if (body) users.push(body);

  respond(req, "Successfully added user", body);
});

servest.get("/users", (req) => {
  respond(req, "Success", users);
});
