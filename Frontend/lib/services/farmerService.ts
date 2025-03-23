// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"; // Update with your backend URL

// // Fetch Milk Production History
// // export const fetchMilkProduction = async (farmerId: string) => {
// //   try {
// //     const response = await axios.get(`${API_URL}/farmer/milk-production`, {
// //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       params: { farmerId },
// //     });
// //     return response.data.data;
// //   } catch (error: any) {
// //     console.error("Error fetching milk production:", error.response?.data || error);
// //     throw error;
// //   }
// // };
// export const fetchFarmerIdByEmail = async (email: string): Promise<string | null> => {
//   try {
//     const response = await axios.get(`${API_URL}/farmers/email/${email}`);
//     return response.data?.farmerId || null;
//   } catch (error) {
//     console.error("Error fetching farmer ID:", error);
//     return null;
//   }
// };

// // export const fetchMilkProduction = async (farmerId: string) => {
// //   try {
// //     const response = await fetch(`/api/farmer/milkProduction?farmerId=${farmerId}`);
// //     if (!response.ok) throw new Error("Failed to fetch milk production");

// //     const data = await response.json();
// //     console.log("API Response Data:", data); // Debugging Log

// //     return data.milkProduction || [];
// //   } catch (error) {
// //     console.error("Error fetching milk production:", error);
// //     return [];
// //   }
// // };
// export const fetchMilkProduction = async (farmerId: string) => {
//     try {
//         const response = await axios.get(`/api/farmers/milk-production/${farmerId}`);
//         return response.data.data;
//     } catch (error) {
//         console.error("Error fetching milk production:", error);
//         return [];
//     }
// };


// // Add Milk Production
// export const addMilkProduction = async (farmerId: string, quantity: number, session: "morning" | "evening") => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/farmer/milk-production`,
//       { farmerId, quantity, session },
//       { 
//         headers: { 
//           "Authorization": `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json"
//         } 
//       }
//     );
//     return response.data;
//   } catch (error: any) {
//     console.error("Error adding milk production:", error.response?.data || error.message);
//     throw error;
//   }
// };



// Frontend/lib/services/farmerService.ts
import axios from 'axios';
import { MilkProduction } from '../../models/MilkProduction';

const API_URL = 'http://localhost:5000/api/farmer'; // Replace with your backend URL

// // Fetch all milk productions for a farmer
// export const getMilkProductions = async (farmerId: string) => {
//   const response = await axios.get(`${API_URL}/milk-productions/${farmerId}`);
//   return response.data;
// };

// // Add a new milk production
// export const addMilkProduction = async (production: Omit<MilkProduction, 'id' | 'status'>) => {
//   const response = await axios.post(`${API_URL}/milk-production`, production);
//   return response.data;
// };

// // Update milk production status
// export const updateMilkProductionStatus = async (productionId: string, status: 'confirmed' | 'cancelled') => {
//   const response = await axios.put(`${API_URL}/milk-production/${productionId}`, { status });
//   return response.data;
// };


export const addMilkProduction = async (data: any) => {
  const response = await fetch("/api/farmer/milk-production", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getMilkProductions = async (farmerId: string) => {
  const response = await fetch(`/api/farmer/milk-production/${farmerId}`);
  return response.json();
};

export const updateMilkProductionStatus = async (id: string, status: "confirmed" | "cancelled") => {
  const response = await fetch(`/api/farmer/milk-production/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return response.json();
};
