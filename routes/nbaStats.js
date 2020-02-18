var express = require('express');
var router = express.Router();
const NBA = require('nba');

/* GET player information. */
router.get('/player/:playerId', function(req, res, next) {
    const { playerId } = req.params;
    NBA.stats.playerInfo({ PlayerID: playerId }).then(res.send.bind(res));
});

/* GET scores information. */
router.get('/scoreboard/:date', function(req, res, next) {
    const { date } = req.params;
    NBA.stats.scoreboard({ gameDate: date }).then(res.send.bind(res));
});

/* GET boxscore information. */
router.get('/boxscore/:gameId', function(req, res, next) {
    const { gameId } = req.params;
    NBA.stats.boxScoreSummary({ GameID: gameId }).then(res.send.bind(res));
});

module.exports = router;