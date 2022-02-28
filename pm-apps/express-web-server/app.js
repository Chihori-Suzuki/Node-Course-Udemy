const express = require("express");
const debug = require("debug")("express");

const app = express();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3010;

app.get("/", (req, res) => {
  debug(`${req.header["user-agent"]} has accesses root URL`);
  res.send("Hello from the Express Node.js Web server!!");
});

app.listen(3010, (err) => {
  if (!err) {
    debug(`Express web server is running at port ${EXPRESS_PORT}`);
  }
});
