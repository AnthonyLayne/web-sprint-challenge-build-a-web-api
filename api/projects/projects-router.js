// Write your "projects" router here!
const express = require("express");
const { get } = require("./projects-model");
const { validateProjectId } = require("./projects-middleware");
const projectRouter = express.Router();

// -  `[GET] /api/projects`
//   - Returns an array of projects as the body of the response.
//   - If there are no projects it responds with an empty array.
projectRouter.get("/", (req, res) => {
  get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({
        message: "No projects",
      });
    });
});

// - [ ] `[GET] /api/projects/:id`
//   - Returns a project with the given `id` as the body of the response.
//   - If there is no project with the given `id` it responds with a status code 404.
projectRouter.get("/:id", validateProjectId, (req, res) => {
  get(req.params.id)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(404).json({
        message: "No existing project with that ID",
      });
    });
});

// - [ ] `[POST] /api/projects`
//   - Returns the newly created project as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.

// - [ ] `[PUT] /api/projects/:id`
//   - Returns the updated project as the body of the response.
//   - If there is no project with the given `id` it responds with a status code 404.
//   - If the request body is missing any of the required fields it responds with a status code 400.

// - [ ] `[DELETE] /api/projects/:id`
//   - Returns no response body.
//   - If there is no project with the given `id` it responds with a status code 404.

// - [ ] `[GET] /api/projects/:id/actions`
//   - Returns an array of actions (could be empty) belonging to a project with the given `id`.
//   - If there is no project with the given `id` it responds with a status code 404.
module.exports = projectRouter;
