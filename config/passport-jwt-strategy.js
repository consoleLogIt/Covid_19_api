const passport  = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


const Doctor = require('../models/doctors');

let opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey :'thisisthkey'
}

passport.use(new JWTStrategy(opts,function(JWTPayLoad,done){
    Doctor.findById(JWTPayLoad._id,function(err,doctor){
        if(err)
        {
            console.log(err)
            return;
        }
        if(doctor){
            return done(null,doctor);
        }else{
            return done(null,false);
        }
    })

}))


module.exports = passport;