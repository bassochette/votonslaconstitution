// model/Article.js
var mongoose = require('mongoose'),
    Alinea = require('./Alinea').schema
var ArticleSchema = mongoose.Schema({
    nom : String,
    alineas : [Alinea],
    revision : Date
})

module.exports.schema = ArticleSchema
module.exports.model = mongoose.model('Article', ArticleSchema)