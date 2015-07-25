// model/Citoyen.js

var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId

var VoteSchema = new  mongoose.Schema({
    citoyen : ObjectId,
    vote : String,
    commentaire : String,
    alinea : ObjectId
})

module.exports = mongoose.model('Vote', VoteSchema)