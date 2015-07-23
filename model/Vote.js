// model/Citoyen.js

var mongoose = require('mongoose')

var VoteSchema = mongoose.Schema({
    citoyen : ObjectId,
    vote : '',
    commentaire : '',
    alinea : ObjectId
})

module.exports = mongoose.model('Vote', VoteSchema)