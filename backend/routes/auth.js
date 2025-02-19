const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// 🔹 Route d'inscription
router.post("/register", async (req, res) => {
  try {
    console.log("🔹 Requête reçue :", req.body);

    const { pseudo, email, password } = req.body;

    // Vérifier si tous les champs sont remplis
    if (!pseudo || !email || !password) {
      console.log("❌ Champs manquants !");
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    // Vérifier si l'utilisateur existe déjà
    let user = await User.findOne({ email });
    if (user) {
      console.log("❌ Email déjà utilisé !");
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("🔑 Mot de passe hashé avec succès.");

    // Créer un nouvel utilisateur avec des crédits et des réservations vides
    user = new User({ 
      pseudo, 
      email, 
      password: hashedPassword, 
      credits: 20, 
      reservations: [] 
    });

    await user.save();
    console.log("✅ Utilisateur enregistré :", user);

    res.status(201).json({ message: "Utilisateur créé avec succès !", userId: user._id });
  } catch (err) {
    console.error("❌ Erreur serveur lors de l'inscription :", err);
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
});

// 🔹 Route de connexion
router.post("/login", async (req, res) => {
  try {
    console.log("🔹 Tentative de connexion :", req.body.email);

    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ Utilisateur non trouvé !");
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Mot de passe incorrect !");
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Connexion réussie :", user.pseudo);
    res.json({ token, user: { pseudo: user.pseudo, email: user.email, credits: user.credits } });
  } catch (err) {
    console.error("❌ Erreur serveur lors de la connexion :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
