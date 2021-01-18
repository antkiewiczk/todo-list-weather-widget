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
    const { title, description, priority } = req.body;

    const newItem = await todoModel.create({
      title,
      description,
      priority,
    });

    return { data: newItem.dataValues };
  } catch (e) {
    return AppException.reject("Internal error", "Error creating a todo", e);
  }
}
