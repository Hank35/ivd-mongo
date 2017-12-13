const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    day: String,
    time: String
});

const Show = mongoose.model('show', ShowSchema);

const show1 = new Show({
    day: 'Monday 18-12-2017',
    time: '19:00'
});//.save();

const show2 = new Show({
    day: 'Thursday 21-12-2017',
    time: '21:00'
});//.save();
module.exports = Show;