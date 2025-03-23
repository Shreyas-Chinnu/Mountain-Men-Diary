// import axios from 'axios';

// export const addMilkProduction = async (farmerId: string, quantity: number, session: "morning" | "evening") => {
//   try {
//     const response = await axios.post(`${MONGO_URI}/milk-production`, 
//       { farmerId, quantity, session }, 
//       { headers: { 
//           "Authorization": `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json" // ✅ Ensure JSON format
//         } 
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("❌ Error Response:", error.response?.data || error.message);
//     throw error;
//   }
// };
import axios from 'axios';
import { MilkProduction } from '../models/MilkProduction';

const API_URL = 'http://localhost:5000/api/farmer'; // Update with your backend URL

// Add new milk production
export const addMilkProduction = async (production: Omit<MilkProduction, 'id' | 'status'>) => {
  const response = await axios.post(`${API_URL}/milk-production`, production);
  return response.data;
};

// Get all milk productions for a farmer
export const getMilkProductions = async (farmerId: string) => {
  const response = await axios.get(`${API_URL}/milk-productions/${farmerId}`);
  return response.data;
};

// Update milk production status
export const updateMilkProductionStatus = async (productionId: string, status: 'confirmed' | 'cancelled') => {
  const response = await axios.put(`${API_URL}/milk-production/${productionId}`, { status });
  return response.data;
};