import express from "express";
import connectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";
import configViewEngine from "./config/viewEngine";

let app = express();

// Connect MongoDB.
connectDB();

//Config view engine
configViewEngine(app);

app.get('/', (req, res) => {
  res.render("main/master");
});

app.get('/login-register', (req, res) => {
  res.render("auth/loginRegister");
});

app.get('/database', async (req, res) => {
  try {
    let item = {
      userId: "UserId2",
      username: "username",
    }
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  } catch (error) {
    console.log(error);
  }
});

app.get('/helloworld', (req, res) => {
  res.send("<h1>Hello World!!</h1>")
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Hoang Nguyen, I'm running at ${process.env.APP_HOST} : ${ process.env.APP_PORT}!!`);
});
