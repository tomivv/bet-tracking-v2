const jwt = require("jsonwebtoken");
const { Bet } = require("../models/Bet");
const { User } = require("../models/User");

async function addBet(req, res) {
  const payload = jwt.verify(req.headers.api_key, process.env.JWT_SECRET);
  const user = await User.query()
    .select("id")
    .where("username", payload.user_id);

  const bet = await Bet.query()
    .insert({
      user_id: user[0].id,
      stake: req.body.panos,
      odds: req.body.kerroin,
      selection: req.body.lyonti,
      type: req.body.tapa,
      event: req.body.kohde,
      sport: req.body.laji,
      win: req.body.voitto,
      date: req.body.paivays
    });

  if(bet.length < 1 || bet.length > 1) {
    return res.status(200).json({
      data: {
        statusCode: 200,
        message: "Error creating new bet",
      }
    });
  }
  return res.status(200).json({
    data: {
      statusCode: 200,
      message: "succesfully created new bet",
      bet: bet
    }
  });
}

module.exports = {
  addBet: addBet,
}