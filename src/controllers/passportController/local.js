import passport from 'passport';
import passportLocal from 'passport-local';
import userModel from './../../models/userModel';
import { transSuccesses, transErrors } from './../../../lang/vi';

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  }, async (req, email, password, done) => {
    try {
      let user = await userModel.findByEmail(email);
      if (!user) {
        return done(null, false, req.flash("errors", transErrors.login_failed));
      }

      if (user.local.isActive == false) {
        return done(null, false, req.flash("errors", transErrors.email_is_not_be_actived));
      }

      let checkPassword = await user.comparePassword(password);
      if (!checkPassword) {
        return done(null, false, req.flash("errors", transErrors.login_failed));
      }

      return done(null, user, req.flash("successes", transSuccesses.login_success(user.username)));
    } catch (error) {
      console.log(error);
      return done(null, false, req.flash("errors", transErrors.server_error));
    }
  }));

  //Save userId to session
  passport.serializeUser((user, done) => {
    return done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    userModel.findUserById(id).then(user => {
      return done(null, user);
    }).catch(err => {
      return done(err, null);
    })
  });
}

module.exports = initPassportLocal;