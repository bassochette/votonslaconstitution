// model/Article.js
var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Alinea = require('./Alinea')
var ArticleSchema = mongoose.Schema({
    nom : String,
    alineas : [ObjectId],
    revision : Date
})

module.exports = mongoose.model('Article', ArticleSchema)