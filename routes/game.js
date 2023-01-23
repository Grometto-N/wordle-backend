var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const  Game = require('../models/games');

var words = ["Force", "Genie", "Basket", "Capsule", "Joueur", "Espionner", "Verte", "Livret", "Reste", "Nord"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function chooseWord(){
    return words[getRandomInt(10)]
}


router.get("/new", (req, res) => {
     const theWord = chooseWord().toUpperCase();
     const newGame = new Game({
                               word : theWord ,
                               date : new Date(),
                               })
     newGame.save().then(data => {  res.json({result : true, gameId : data.id, wordLength : theWord.length, word : theWord})
     });
})


module.exports = router;