import AppException from "../../../exceptions/AppException.js";

/**
 * Handles delete todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoDeleteHandler(server, req, res) {
  try {
    return server.db
      .models()
      .then((models) => models.Todo.destroy({ where: { uuid: req.params.id } }))
      .then(() => ({ data: req.params.id }));
  } catch (e) {
    return AppException.reject("Internal error", "Error deleting a todo", e);
  }
}
