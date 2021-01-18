import listHandler from "./list.js";
import createHandler from "./create.js";
import deleteHandler from "./delete.js";
import editHandler from "./edit.js";

/**
 * Registers TODO request handlers
 * @param {String} path current url path
 * @param {Server} server server instance
 */
export default function registerTodo(path, server) {
  server.registerHandler("get", `${path}/list`, listHandler);
  server.registerHandler("post", `${path}/create`, createHandler);
  server.registerHandler("delete", `${path}/delete/:id`, deleteHandler);
  server.registerHandler("patch", `${path}/edit`, editHandler);
}
