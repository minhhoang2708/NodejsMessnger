import mongoose from "mongoose";

let Schema = mongoose.Schema;
let ContactSchemaOptions = {
  userId: String,
  username: String,
  status: { type: Boolean, default: false },
  gender: { type: String, default: 'male' },
  phone: { type: String, default: null },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
}
let ContactSchema = new Schema(ContactSchemaOptions);
ContactSchema.statics = {
  createNew(item){
    return this.create(item);
  }
}

module.exports = mongoose.model("contact", ContactSchema);