const express = require("express");
const Ride = require("../models/Ride");

const router = express.Router();

// 🔹 Récupérer tous les trajets
router.get("/", async (req, res) => {
  try {
    const rides = await Ride.find();
    console.log("✅ Liste des trajets récupérée :", rides);
    res.json(rides);
  } catch (err) {
    console.error("❌ Erreur lors de la récupération des trajets :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// 🔹 Ajouter un nouveau trajet avec logs
router.post("/", async (req, res) => {
  try {
    console.log("🔹 Requête reçue :", req.body);

    // Vérification que tous les champs sont bien fournis
    const { driver, departure, arrival, date, price, seats, ecoFriendly } = req.body;
    if (!driver || !departure || !arrival || !date || !price || !seats) {
      console.log("❌ Champs manquants !");
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    // Création du trajet
    const newRide = new Ride({ driver, departure, arrival, date, price, seats, ecoFriendly });

    // Sauvegarde en base
    await newRide.save();
    console.log("✅ Trajet ajouté avec succès :", newRide);

    res.status(201).json({ message: "Trajet ajouté avec succès", ride: newRide });
  } catch (err) {
    console.error("❌ Erreur lors de l'ajout du trajet :", err);
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
});

module.exports = router;
