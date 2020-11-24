const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("../config/key");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "User management system API",
      description: "Backend API for user management system",
      contact: {
        name: "Jerry Leung",
      },
      servers: ["http://localhost:5000"],
    },
  },
  //['.routes/*.js']
  apis: ["server/index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

/**
 *  @swagger
 *  /users:
 *   get:
 *    description: Use to get all users
 *    responses:
 *     '200':
 *        description: Success get all users
 */

app.get("/users", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
