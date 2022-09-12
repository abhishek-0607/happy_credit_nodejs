const app = require("./app");
const connect = require("./configs/db");
const port = 5000;

app.listen(port, async () => {
  await connect();
  console.log("Listening to PORT 5000");
});
