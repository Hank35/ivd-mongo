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
    imagePath: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle',

}).save();

module.exports = Film;
