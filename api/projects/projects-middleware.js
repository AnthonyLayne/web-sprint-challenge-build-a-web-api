// add middlewares here related to projects
const PROJECTS = require("../projects/projects-model");

async function validateProjectId(req, res, next) {
  try {
    const project = await PROJECTS.get(req.params.id);
    if (!project) {
      next({ status: 404, message: "no project found" });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: "could not find project",
    });
  }
}

module.exports = {
  validateProjectId,
};
