// Write your "actions" router here!
const express = require("express");
const { get } = require("./actions-model");
const { validateActionId } = require("./actions-middlware");
const actionRouter = express.Router();
// - [ ] `[GET] /api/actions`
//   - Returns an array of actions (or an empty array) as the body of the response.
actionRouter.get("/", (req, res) => {
  get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(() => {
      res.status(500).json({
        message: "No actions",
      });
    });
});

// - [ ] `[GET] /api/actions/:id`
//   - Returns an action with the given `id` as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.
actionRouter.get("/:id", validateActionId, (req, res) => {
  get(req.params.id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(() => {
      res.status(404).json({
        message: "No existing actions with that ID",
      });
    });
});

// - [ ] `[POST] /api/actions`
//   - Returns the newly created action as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.
//   - When adding an action make sure the `project_id` provided belongs to an existing `project`.

// - [ ] `[PUT] /api/actions/:id`
//   - Returns the updated action as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.
//   - If the request body is missing any of the required fields it responds with a status code 400.

// - [ ] `[DELETE] /api/actions/:id`
//   - Returns no response body.
//   - If there is no action with the given `id` it responds with a status code 404.
module.exports = actionRouter;
