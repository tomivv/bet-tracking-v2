const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");
const { login } = require("./src/api/login");
const { addBet, getAllBets, getBetsDetailed, updateBet, deleteBet } = require("./src/api/bets");
const { verifyToken } = require("./src/middleware/auth");

const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: 'a' });

app.use(cors());
app.use(morgan(":method :url :status :response-time ms - :res[content-length]", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const knex = Knex(knexConfig.development);

Model.knex(knex);

app.post("/", login);
app.post("/api/bets", verifyToken, addBet);
app.get("/api/bets", verifyToken, getAllBets);
app.get("/api/bets/detail", verifyToken, getBetsDetailed);
app.put("/api/bets", verifyToken, updateBet);
app.delete("/api/bets", verifyToken, deleteBet);



app.listen(3001, () => console.log(`Running @ http://localhost:3001`));