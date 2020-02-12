import express from "express";
import { home, auth } from "./../controllers/index";
import { authValid } from "./../validation/index";
import passport from 'passport';
import initPassportLocal from "./../controllers/passportController/local";

// init all passport
initPassportLocal();

let router = express.Router();

let initRouters = (app) => {
  router.get('/', home.getHomeController);
  router.get('/login-register', auth.getLoginRegister);
  router.post('/register', authValid.register, auth.postRegister);
  router.get('/verify/:token', auth.verifyAccount);
  router.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true,
  }));
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
