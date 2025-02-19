import axios from "axios";

const API_URL = "http://localhost:5000/api/rides";

export const fetchRides = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des trajets :", error);
    return [];
  }
};
