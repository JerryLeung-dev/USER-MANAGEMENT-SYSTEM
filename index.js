const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const config = require("./config/key");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
