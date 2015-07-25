// model/Alinea.js
var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId

var AlineaSchema = new mongoose.Schema({
    alinea : String,
    texte : String,
    revision : Date,
    article : ObjectId
})

module.exports = mongoose.model('Alinea', AlineaSchema)