import "./environments/config.ts"; // Config MUST be imported first
import chat from "./routes/chat.ts";
import auth from "./routes/auth.ts";
import "./setup/mysql.ts";
import "./setup/servest.ts";
import servest from "./setup/servest.ts";

servest.route("/api/ws", chat());
servest.route("/api/auth", auth());
