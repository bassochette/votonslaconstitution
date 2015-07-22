var config = require('./config'),
    mongoose = require('mongoose'),
    express = require('express')


//initialise la base de données
mongoose.connect(config.config.mongo)
var db = mongoose.connection
db.on('error', function(err){
    console.log('Une erreur est survenue lors de la connection à la base de données....')
})
db.once('open', function(){
    console.log('Base de données connecté')
})




