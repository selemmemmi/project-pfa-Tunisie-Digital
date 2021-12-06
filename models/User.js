const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  product: { type: Number, default: 0 },
  phone: Number,
  role: { type: String, default: "client" },
});

module.exports = User = model("user", userSchema);
