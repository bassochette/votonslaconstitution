var passport = require('../config/passport')(require(passport))
module.exports = {
    connexion: function (req, res) {
        passport.authenticate('connexion', function (err, citoyen, message) {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            if(!citoyen){
                if(message){
                    return res.send(message)
                }
                return res.send(false)
            }
            return res.send(citoyen)
        })
    },
    inscription: function (req, res) {
        passport.authenticate('inscription', function (err, citoyen, message) {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            if(!citoyen){
                if(message){
                    return res.send(message)
                }
                return res.send(false)
            }
            return res.send(citoyen)
        })
    }
}