const express = require("express");
const cors = require("cors");

const app = express();

const port = 8080;
const knex = require("knex")(require("../db/knexfile.js")["development"]);

app.use(cors());

app.get("/", (req, res) =>
  res.send("API reached! Please visit the /movies endpoint for data."),
);

app.get("/movies", function (req, res) {
  knex("favs")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      }),
    );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
