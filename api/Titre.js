// api/Titre.js
var Titre = require('../model/Titre')

module.exports = {
    get : function (req, res){
        res.status(200)
        return res.send('Titre '+req.params.id)
    },
    getListe : function(req, res){

        Titre.find({}, function(err, titres){
            console.log(titres);
            res.status(200)
            return res.send(titres)
        })
    }
}
