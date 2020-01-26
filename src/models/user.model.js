import mongoose from "mongoose";
module.exports = mongoose.Schema.model("user", new Schema({
  username: String,
  gender: { type: String, default: 'male' },
  phone: { type: String, default: null },
  address: { type: String, default: null },
  avatar: { type: String, default: 'avatar-default.png' },
  role: { type: String, default: 'user' },
  local: {
    email: { type: String, trim: true },
    password: { type: String },
    isActive: { type: Boolean, default: false },
    verifyToken: String,
  },
  facebook: {
    uid: String,
    token: String,
    email: { type: String, trim: true },
  },
  google: {
    uid: String,
    token: String,
    email: { type: String, trim: true },
  },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
}));