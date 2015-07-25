// model/Titre.js
var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId

var TitreSchema = new mongoose.Schema({
    nom : String,
    articles : [ObjectId],
    revision : Date
})

module.exports = mongoose.model('Titre', TitreSchema)
