// api/articles
module.exports = {
    get : function (req, res){
        res.status(200)
        return res.send('Article '+req.params.id)
    },
    getListe : function(req, res){
        res.status(200)
        return res.send('Listes des articles')
    },
    getParTitre : function(req, res){

    }
}
