const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  try {
    return res.status(200).send("hello world");
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

module.exports = app;
