const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const postController = require("./controllers/postController");
app.use(express.json());

app.use(bodyparser.json());
app.use(cors());

app.use("/post", postController);

module.exports = app;
