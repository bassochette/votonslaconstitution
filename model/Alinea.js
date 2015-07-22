// model/Alinea.js
var AlineaSchema = mongoose.Schema({
    alinea : Number,
    text : String,
    revision : Date
})

module.exports.schema = AlineaSchema
module.exports.model = mongoose.model('Alinea', AlineaSchema)