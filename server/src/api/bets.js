const { Bet } = require("../models/Bet");

async function addBet(req, res) {
  const bet = await Bet.query()
    .insert({
      stake: req.body.panos,
      odds: req.body.kerroin,
      selection: req.body.lyonti,
      type: req.body.tapa,
      event: req.body.kohde,
      sport: req.body.laji,
      win: req.body.voitto,
      date: req.body.paivays
    });


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