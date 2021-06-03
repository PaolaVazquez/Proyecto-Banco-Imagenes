const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local.signup', new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'contraseña',
    passReqToCallback: true
}, async(req, usuario, contraseña, done) => {

    console.log(req.body);

}));


//passport.serializeUser((usr, done) => {

//});