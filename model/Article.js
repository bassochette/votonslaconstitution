// model/Article.js
var mongoose = require('mongoose'),
    Alinea = require('./Alinea').schema
var ArticleSchema = mongoose.Schema({
    nom : String,
    alineas : [ObjectId],
    revision : Date
})

module.exports = mongoose.model('Article', ArticleSchema)