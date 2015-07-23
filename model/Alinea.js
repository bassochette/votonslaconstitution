// model/Alinea.js
var mongoose = require('mongoose')

var AlineaSchema = mongoose.Schema({
    alinea : Number,
    text : String,
    revision : Date
})

module.exports = mongoose.model('Alinea', AlineaSchema)