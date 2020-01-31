import mongoose from "mongoose";
module.exports = mongoose.Schema.model("notification", new mongoose.Schema({
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
  type: String,
  content: String,
  isRead: {type: Boolean, default: false},
  createdAt: { type: Number, default: Date.now() }
}));