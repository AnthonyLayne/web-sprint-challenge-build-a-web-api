// add middlewares here related to actions
const ACTIONS = require("../actions/actions-model");

async function validateActionId(req, res, next) {
  try {
    const actions = await ACTIONS.get(req.params.id);
    if (!actions) {
      next({ status: 404, message: "no action found" });
    } else {
      req.actions = actions;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: "could not find action",
    });
  }
}

module.exports = {
  validateActionId,
};
