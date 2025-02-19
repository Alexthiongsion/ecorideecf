const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connecté à MongoDB"))
.catch(err => console.error("❌ Erreur MongoDB :", err));

// 🔹 Import des routes
const rideRoutes = require("./routes/rides");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

app.use("/api/rides", rideRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// 🔹 Route test pour voir si l'API fonctionne
app.get("/", (req, res) => {
    res.send("API EcoRide fonctionne !");
});

// 🔹 Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
