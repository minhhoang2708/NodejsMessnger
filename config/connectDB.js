import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * function connectDB: Connect to MongoDatabase via URI.
 * [Arg]: None.
 * [Addtional]: Use package bluebird instead of promise.
 * [ReturnValue]: Promise <typeof mongoose>
 */
let connectDB = () => {
  mongoose.Promise = bluebird;
  // mongodb://localhost:27017/awesome_chat
  let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  return mongoose.connect(URI, { useMongoClient: true });
}

module.exports = connectDB;