import { useEffect, useState } from "react";
import { fetchRides } from "../api/rides";

function RidesList() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const getRides = async () => {
      const data = await fetchRides();
      setRides(data);
    };
    getRides();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des covoiturages</h1>
      {rides.length === 0 ? (
        <p>Aucun trajet disponible.</p>
      ) : (
        <ul className="space-y-4">
          {rides.map((ride) => (
            <li key={ride._id} className="p-4 border rounded shadow-md">
              <p><strong>Conducteur :</strong> {ride.driver}</p>
              <p><strong>Départ :</strong> {ride.departure}</p>
              <p><strong>Arrivée :</strong> {ride.arrival}</p>
              <p><strong>Date :</strong> {new Date(ride.date).toLocaleString()}</p>
              <p><strong>Prix :</strong> {ride.price} €</p>
              <p><strong>Places disponibles :</strong> {ride.seats}</p>
              <p><strong>Écologique :</strong> {ride.ecoFriendly ? "Oui ✅" : "Non ❌"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RidesList;
