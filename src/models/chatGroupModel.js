import mongoose from "mongoose";
module.exports = mongoose.Schema.model("chat-group", new mongoose.Schema({
  name: String,
  userAmount: {type: Number, min: 3, max: 200},
  messageAmount: {type: Number, default: 0},
  userId: String,
  members: [
    {userId: String}
  ],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
}));