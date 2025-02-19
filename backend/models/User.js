const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  pseudo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  credits: { type: Number, default: 20 } // 20 crédits à l'inscription
});

module.exports = mongoose.model("User", UserSchema);
