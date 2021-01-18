import AppException from "../../../exceptions/AppException.js";

/**
 * Handles create todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default async function todoEditHandler(server, req, res) {
  try {
    const { title, description, priority, id } = req.body;

    await server.db.models().then((models) =>
      models.Todo.update(
        {
          title,
          description,
          priority: String(priority),
        },
        { where: { uuid: id } }
      )
    );

    const updated = await server.db
      .models()
      .then((models) => models.Todo.findOne({ where: { uuid: id } }));

    return { data: updated.dataValues };
  } catch (e) {
    return AppException.reject(e);
  }
}
