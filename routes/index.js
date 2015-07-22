// routes/index.js
var router = require('express')()
    api = require('./api')

router.use('/api', api)
router.use('*', function(req, res){
    res.status(404)
   return  res.send('Nope')
})

module.exports = router