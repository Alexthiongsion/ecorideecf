const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  pseudo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  credits: { type: Number, default: 20 }, // 20 crédits à l'inscription
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ride" }] // Ajout de la relation avec Ride
});

module.exports = mongoose.model("User", UserSchema);
