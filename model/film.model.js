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
    imagePath:'https://pics.me.me/what-ifitoli-you-i-never-saw-the-matrix-memeful-com-13519947.png',
}).save();

module.exports = Film;
