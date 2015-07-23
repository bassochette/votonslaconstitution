var LocalStrategy = require('passport-local').Strategy
var Citoyen = require('../model/Citoyen')


module.exports = function (passport) {

    passport.serializeUser(function (citoyen, next) {
        next(null, citoyen.email)
    });

    passport.deserializeUser(function (email, next) {
        Citoyen.findOne({'email': email}, function (err, citoyen) {
            next(err, citoyen)
        })
    });

    passport.use('inscription', new LocalStrategy({
        usernameField: email,
        passwordField: motdepasse,
        passReqToCallback: true
    }), function (req, email, motdepasse, next) {

        process.nextTick(function () {
            Citoyen.findOne({
                'email': email
            }, function (err, citoyen) {
                if (err) {
                    next(err)
                }

                if (citoyen) {
                    return next(null, false, 'Un citoyen utilise cet adresse email.')
                } else {
                    var nouveauCitoyen = new Citoyen()
                    nouveauCitoyen.email = email
                    nouveauCitoyen.motdepasse = nouveauCitoyen.genererLeHash(motdepasse)
                    nouveauCitoyen.save(function (err, cityoen) {
                        if (err)
                            throw err

                        return next(null, citoyen)
                    })
                }
            })
        })
    });

    passport.use('connection', new LocalStrategy({
        usernameField: email,
        passwordField: motDePasse,
        passReqToCallback: true
    }, function (req, email, motDePasse, next) {
        Citoyen.findOne({
            'email': email
        }, function (err, citoyen) {
            if(err)
                throw err

            if(!citoyen){
                next(null, false, 'Aucun citoyen avec cette adresse email.')
            }

            if(!citoyen.motDePasseValide(motDePasse)){
                next(null, false)
            }

            next(null, citoyen)
        })
    }))


    return passport
}
