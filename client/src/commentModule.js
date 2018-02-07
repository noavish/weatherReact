var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
    user: String,
    comment: String
});

var Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;