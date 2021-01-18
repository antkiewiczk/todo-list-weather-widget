import AppException from "../../../exceptions/AppException.js";

/**
 * Handles list todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoListHandler(server, req, res) {
  try {
    return server.db
      .models()
      .then((models) => models.Todo.findAll())
      .then((result) => ({ data: result }));
  } catch (e) {
    return AppException.reject(e);
  }
}
