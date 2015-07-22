// model/Titre.js
var mongoose = require('mongoose'),
    Article = require('./Article').schema
var TitreSchema = mongoose.Schema({
    nom : String,
    articles : [Article],
    revision : Date
})

module.exports.schema = TitreSchema
module.exports.model = mongoose.model('Titre', TitreSchema)
