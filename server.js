/* eslint-disable global-require */
const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(() => {
    require("./routes/factory")(server, app);
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
