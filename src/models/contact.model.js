import mongoose from "mongoose";
module.exports = mongoose.Schema.model("contact", new mongoose.Schema({
  userId: String,
  username: String,
  status: {type: Boolean, default: false},
  gender: { type: String, default: 'male' },
  phone: { type: String, default: null },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
}));