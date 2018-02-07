var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
    user: String,
    comment: String
});

var citySchema = new mongoose.Schema({
    name: String,
    comments: [commentSchema]
});

var City = mongoose.model('city', citySchema);

module.exports = City;

