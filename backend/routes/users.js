const express = require("express");
const User = require("../models/User");

const router = express.Router();

// 🔹 Récupérer tous les utilisateurs
router.get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error("❌ Erreur lors de la récupération des utilisateurs :", err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });
  

// 🔹 Récupérer les informations d'un utilisateur
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("reservations");
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
});

module.exports = router;
