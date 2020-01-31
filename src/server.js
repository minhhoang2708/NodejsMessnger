import express from "express";
import connectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRouters from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";

let app = express();

// Connect MongoDB.
connectDB();

// cConfig session
configSession(app);

//Config view engine
configViewEngine(app);

// enabled post request
app.use(bodyParser.urlencoded({ extended: true }));
// enabled connect-flash
app.use(connectFlash());

// init all routes
initRouters(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Hoang Nguyen, I'm running at ${process.env.APP_HOST} : ${process.env.APP_PORT}!!`);
});
