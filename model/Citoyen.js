// model/Citoyen.js
var mongoose = require('mongoose')
     bcrypt = require('node-bcrypt')

var CitoyenSchema = new mongoose.Schema({
    email : String,
    motdepasse : String
})

CitoyenSchema.methods.genererLeHash = function(motDePasse){
    return bcrypt.hashSync(motDePasse, bcrypt.genSaltSync(8), null)
}

CitoyenSchema.methods.motDePasseValide = function(motDePasse){
    return bcrypt.compareSync(motDePasse, this.motdepasse)
}

module.exports = mongoose.model('Citoyen', CitoyenSchema)