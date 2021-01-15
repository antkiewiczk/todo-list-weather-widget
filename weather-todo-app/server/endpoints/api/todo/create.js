import AppException from "../../../exceptions/AppException.js";

/**
 * Handles create todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default async function todoCreateHandler(server, req, res) {
  try {
    const todoModel = await server.db.models().then((models) => models.Todo);

    todoModel.create({
      title: "test title",
      description: "test description",
      priority: 1,
    });

    return {};
  } catch (e) {
    return AppException.reject("Internal error", "Error creating a todo", e);
  }
}
