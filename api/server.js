const express = require("express");
const projectRouter = require("./projects/projects-router");
const server = express();
server.use(express.json());
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "hey" });
});
server.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
