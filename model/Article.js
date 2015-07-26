// model/Article.js
var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId

var ArticleSchema = mongoose.Schema({
    nom: String,
    numero: String,
    alineas: [ObjectId],
    revision: Date,
    titre: ObjectId
})

module.exports = mongoose.model('Article', ArticleSchema)