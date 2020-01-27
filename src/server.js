import express from "express";
import connectDB from "./../config/connectDB";
import ContactModel from "./../src/models/contact.model";

let app = express();

// Connect MongoDB.
connectDB();

/**
 * function connectDB: Connect to MongoDatabase via URI.
 * [Arg]: None.
 * [Addtional]: Use package bluebird instead of promise.
 * [ReturnValue]: Promise <typeof mongoose>
 */
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
