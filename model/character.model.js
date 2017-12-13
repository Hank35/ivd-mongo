const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    age: Number,
    imagePath: String
});

const Character = mongoose.model('character', CharacterSchema);

const character1 = new Character({
    name: 'neo',
    age: 44 ,
    imagePath: 'https://pics.me.me/what-ifitoli-you-i-never-saw-the-matrix-memeful-com-13519947.png',

}).save();

const character2 = new Character({
    name: 'Laurence',
    age: 63 ,
    imagePath: 'https://pics.me.me/what-ifitoli-you-i-never-saw-the-matrix-memeful-com-13519947.png',

}).save();

module.exports = Character;
