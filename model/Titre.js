// model/Titre.js
var mongoose = require('mongoose'),
    Article = require('./Article').schema
var TitreSchema = mongoose.Schema({
    nom : String,
    articles : [ObjectId],
    revision : Date
})

module.exports = mongoose.model('Titre', TitreSchema)
