var fs = require('fs'),
    Titre = require('../model/Titre'),
    Article = require('../model/Article'),
    Alinea = require('../model/Alinea')

fs.readdir(__dirname+'/constitution', function(err, files){
    if(err){
        console.log(err)
    }
    files.forEach(function(file){
        if(file !== '.DS_Store')
        {
            var titre = require('./constitution/'+file)
            var nvTitre = new Titre()
            nvTitre.nom = titre.nom
            nvTitre.numero = titre.numero
            nvTitre.save(function(err, t){
                if(err){
                    console.log(err)
                }
                titre.articles.forEach(function(article){
                    nvArticle = new Article()
                    nvArticle.nom = article.nom
                    nvArticle.numero = article.numero
                    nvArticle.titre = t
                    nvArticle.save(function(err, a){
                        if(err){
                            console.log(err)
                        }
                        article.alineas.forEach(function(alinea){
                            var nvAlinea = new Alinea()
                            nvAlinea.alinea = alinea.numero
                            nvAlinea.texte = alinea.texte
                            nvAlinea.article = a
                            nvAlinea.save(function(err, al){
                                //console.log(al)
                            })
                        })
                    })
                })
            })
        }
    })
})
