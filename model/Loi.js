// model/Loi.js
var Titre = require('./Titre').schema
var LoiSchema = mongoose.Schema({
    langue : String,
    pays : String,
    nom : String,
    titres : [Titre],
    revision : Date
})

module.exports.schema = LoiSchema
module.exports.model = mongoose.model('Loi', LoiSchema)