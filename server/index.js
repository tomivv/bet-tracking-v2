const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: 'a' });

app.use(cors());
app.use(morgan(":method :url :status :response-time ms - :res[content-length]", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send("Hello, Bettor!");
});

app.listen(3001, () => console.log(`Running @ http://localhost:3001`));