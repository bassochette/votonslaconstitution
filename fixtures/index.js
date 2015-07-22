var constitution = require('./seeds/constitution.js'),
    Titre = require('../model/Titre').model,
    Article = require('../model/Article').model,
    Alinea = require('../model/Alinea').model

console.log(constitution)

constitution.forEach(function(titre){
    var nouveauTitre = new Titre()
    nouveauTitre.nom = titre.nom
    titre.articles.forEach(function(article){
        var nouvelArticle = new Article()
        nouvelArticle.nom = article.nom
        article.alineas.forEach(function(alinea){
            var nouvelAlinea = new Alinea()
            nouvelAlinea.numero = alinea.numero
            nouvelAlinea.text = alinea.text
            nouvelArticle.alineas.push(nouvelAlinea)
        })
        nouveauTitre.articles.push(nouvelArticle)
        nouveauTitre.save(function(err, t){
            if(err){
                console.log(err)
            } else {
                console.log(t)
            }
        })
    })
})