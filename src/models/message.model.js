import mongoose from "mongoose";
module.exports = mongoose.Schema.model("message", new mongoose.Schema({
  sender: {
    id: String,
    username: String,
    avatart: String
  },
  receiver: {
    id: String,
    username: String,
    avatart: String
  },
  text: String,
  file: {data: Buffer, contentType: String, fileName: String},
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
}));