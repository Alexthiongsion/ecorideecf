const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  driver: { type: String, required: true }, // Pseudo du conducteur
  departure: { type: String, required: true }, // Ville de départ
  arrival: { type: String, required: true }, // Ville d'arrivée
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  seats: { type: Number, required: true }, // Places dispo
  ecoFriendly: { type: Boolean, default: false } // True si voiture électrique
});

module.exports = mongoose.model("Ride", RideSchema);
