const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.get("/", async (req, res) => {
  try {
    return res.status(200).send("hello world");
  } catch (error) {
    return res.status(401).send(error.message);
  }
});
