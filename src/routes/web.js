import express from "express";
import { home, auth } from "./../controllers/index";
import { authValid } from "./../validation/index";
import passport from 'passport';
import initPassportLocal from "./../controllers/passportController/local";

// init all passport
initPassportLocal();

let router = express.Router();

let initRouters = (app) => {
  router.get('/login-register', auth.checkLoggedOut, auth.getLoginRegister);
  router.post('/register', auth.checkLoggedOut, authValid.register, auth.postRegister);
  router.get('/verify/:token', auth.checkLoggedOut, auth.verifyAccount);
  router.post('/login', auth.checkLoggedOut, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true,
  }));
  router.get('/', auth.checkLoggedIn, home.getHomeController);
  router.get("/logout", auth.checkLoggedIn, auth.getLogout)
  // router.get('/database', async (req, res) => {
  //   try {
  //     let item = {
  //       userId: "UserId2",
  //       username: "username",
  //     }
  //     let contact = await ContactModel.createNew(item);
  //     res.send(contact);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  return app.use("/", router)
}

module.exports = initRouters;
