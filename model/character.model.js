const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
});

const Character = mongoose.model('character', CharacterSchema);

const character1 = new Character({
    name: 'neo',
    description: 44 ,
    imagePath: 'https://pics.me.me/what-ifitoli-you-i-never-saw-the-matrix-memeful-com-13519947.png',

}).save();

const character2 = new Character({
    name: 'Laurence',
    description: 63 ,
    imagePath: 'https://pics.me.me/what-ifitoli-you-i-never-saw-the-matrix-memeful-com-13519947.png',

}).save();

module.exports = Character;
