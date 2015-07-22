// api/Alinea.js
module.exports = {
    get : function (req, res){
        res.status(200)
        return res.send('Alinea '+req.params.id)
    },
    getParArticle : function(req, res){
        res.status(200)
        return res.send('Listes des alineas')
    }
}


