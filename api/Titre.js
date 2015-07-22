// api/Titre.js
module.exports = {
    get : function (req, res){
        res.status(200)
        return res.send('Titre '+req.params.id)
    },
    getListe : function(req, res){
        res.status(200)
        return res.send('Listes des titres')
    }
}
