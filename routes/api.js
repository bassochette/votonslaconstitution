// routes/api.js
var router = require('express')(),
    alinea = require('../api/Alinea'),
    article = require('../api/Article'),
    titre = require('../api/Titre'),
    citoyen = require('../api/Citoyen')

router.get('/titre', titre.getListe)
router.get('/titre/:id', titre.get)

router.get('/article', article.getListe)
router.get('/article/:titre', article.getParTitre)
router.get('/article/:titre/:id', article.get)

router.get('/alinea/:titre/:article', alinea.getParArticle)
router.get('/alinea/:titre/:article/:alinea', alinea.get)

router.post('/citoyen/connexion', citoyen.connexion)
router.post('/citoyen/inscription', citoyen.inscription)


module.exports = router
