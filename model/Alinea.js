// model/Alinea.js
var mongoose = require('mongoose')

var AlineaSchema = mongoose.Schema({
    alinea : Number,
    text : String,
    revision : Date
})

module.exports.schema = AlineaSchema
module.exports.model = mongoose.model('Alinea', AlineaSchema)