const mongoose = require('mongoose');


const gameSchema = mongoose.Schema({
    word : String,
    date : Date, 
});

const Game = mongoose.model('games', gameSchema);

module.exports = Game;