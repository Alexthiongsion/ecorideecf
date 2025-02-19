🚗 EcoRide - Application de covoiturage

📌 Installation et exécution

Backend

Cloner le projet :

git clone https://github.com/alexthiongsion/ecorideecf.git
cd ecorideecf

Installer les dépendances backend :

cd backend
npm install

Configurer l'environnement (.env) :

MONGO_URI=mongodb://127.0.0.1:27017/ecoride
JWT_SECRET=superSecretKey123

Lancer le serveur backend :

npm run dev

Frontend

Aller dans le dossier frontend :

cd frontend

Installer les dépendances :

npm install

Lancer l'application React :

npm run dev

💻 Interface Utilisateur (UI)

L’interface est construite avec React + Vite + Tailwind CSS pour une expérience utilisateur fluide et rapide.

📷 Aperçu de l'UI

🖼️ Voir la maquette Figma

Page

Description

🏠 Accueil

Présentation rapide de l'application

🚗 Liste des trajets

Affichage des trajets disponibles avec bouton de réservation

👤 Profil utilisateur

Gestion des informations et des réservations de l'utilisateur

🚀 API Routes

Method

Endpoint

Description

POST

/api/auth/register

Inscription d'un utilisateur

POST

/api/auth/login

Connexion d'un utilisateur

GET

/api/users/:userId

Récupérer un utilisateur par ID

GET

/api/rides

Liste des trajets disponibles

POST

/api/rides/:rideId/reserve

Réserver un trajet

🚀 Technos utilisées

Backend : Node.js, Express, MongoDB, Mongoose

Frontend : React.js, Vite, Tailwind CSS

Authentification : JWT (JSON Web Token)

Base de données : MongoDB avec gestion des trajets et réservations

📝 Auteur & Contributeurs

Développé par Pierre-Alexandre THIONG-SION

GitHub : https://github.com/Alexthiongsion/ecorideecf

UI Design : https://www.figma.com/design/1gw6y484aefQO2cOkee1fL/EcoRide?node-id=0-1&p=f&t=OwhXUe37doQjEwzq-0

📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.
