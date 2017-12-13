const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
});

const Film = mongoose.model('film', FilmSchema);

const film1 = new Film({
    name: 'The Matrix',
    description:'Welcome to the Real World',
    imagePath: 'https://resizing.flixster.com/a2U1lUGlpYOCupFiv8dJMypbkh0=/206x305/v1.bTsxMjU3NjUzNjtqOzE3NTYwOzEyMDA7NDA1MDs2MDAw',

}).save();

module.exports = Film;
