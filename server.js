var config = require('./config'),
    mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    passport = require('./config/passport')(require('passport'))

//initialise la base de données
mongoose.connect(config.bdd.mongo)
var db = mongoose.connection
db.on('error', function(err){
    console.log('Une erreur est survenue lors de la connection à la base de données....')
})
db.once('open', function(){
    console.log('Base de données connecté')
})

// Load data
require('./fixtures')

// initialise express
var app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(require('./routes'))

app.listen(config.port || 3000, function(){
    console.log("Application a l'écoute")
})