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
    imagePath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg',

}).save();

const character2 = new Character({
    name: 'Laurence',
    age: 63 ,
    imagePath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg',

}).save();

module.exports = Character;
