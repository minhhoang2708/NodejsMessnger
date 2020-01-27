import express from "express";
import { home, auth } from "./../controllers/index";

let router = express.Router();

let initRouters = (app) => {
  router.get('/', home.getHomeController);

  router.get('/login-register', auth.getLoginRegister);

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
