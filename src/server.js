import express from "express";
import connectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRouters from "./routes/web";
import bodyParser from "body-parser";

let app = express();

// Connect MongoDB.
connectDB();

//Config view engine
configViewEngine(app);

// enabled post request
app.use(bodyParser.urlencoded({ extended: true }));
// init all routes
initRouters(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Hoang Nguyen, I'm running at ${process.env.APP_HOST} : ${process.env.APP_PORT}!!`);
});
