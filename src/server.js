const app = require("./app");
const connect = require("./configs/db");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connect();
  console.log("Listening to PORT 5000");
});
