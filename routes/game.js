var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const  Game = require('../models/games');

// mots possibles
var words = ["Force", "Genie", "Basket", "Capsule", "Joueur", "Espionner", "Verte", "Livret", "Reste", "Nord"];

// fonction permettant de choisir un mot au hasard dans le tableau words
function chooseWord(){
    return words[Math.floor(Math.random() * words.length)]
}


router.get("/new", (req, res) => {
    console.log("ici")
    const theWord = chooseWord().toUpperCase();
    const newGame = new Game({
                              word : theWord ,
                              date : new Date(),
                              })
    newGame.save().then(data => {  res.json({result : true, gameId : data.id, wordLength : theWord.length, word : theWord})
    });
})


module.exports = router;