// // import { NextRequest, NextResponse } from "next/server";
// // import axios from "axios";
// // import db from "db";
// // import MilkProduction from "@/models/MilkProduction";
// // export async function GET(req: NextRequest) {
// //   try {
// //     const res = await axios.get(`${process.env.BACKEND_URL}/farmer/milk-production`);
// //     return NextResponse.json(res.data);
// //   } catch (error) {
// //     return NextResponse.json({ error: "Failed to fetch milk production" }, { status: 500 });
// //   }
// // }

// // export async function POST(req: NextRequest) {
// //   try {
// //     const body = await req.json();
// //     const res = await axios.post(`${process.env.BACKEND_URL}/farmer/milk-production`, body);
// //     return NextResponse.json(res.data);
// //   } catch (error) {
// //     return NextResponse.json({ error: "Failed to update milk production" }, { status: 500 });
// //   }
// // }


// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '../../../lib/db';
// import MilkProduction from '@/models/MilkProduction';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect(); // Ensure DB is connected

//   if (req.method === 'GET') {
//     try {
//       const { farmerId } = req.query;
//       if (!farmerId) return res.status(400).json({ message: "Farmer ID is required" });

//       const milkRecords = await MilkProduction.find({ farmer: farmerId }).sort({ date: -1 });

//       res.status(200).json({ success: true, milkProduction: milkRecords });
//     } catch (error) {
//       console.error("Error fetching milk production:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   }
// if (req.method === 'POST') {
//   console.log("DEBUG: Received Request Body →", req.body);

//   const { farmerId, quantity } = req.body;
//   if (!farmerId || quantity === undefined) {
//       console.log("ERROR: Missing Farmer ID or Quantity!");
//       return res.status(400).json({ success: false, message: "Farmer ID or quantity is missing!" });
//   }

//   res.json({ success: true, message: "Data received correctly!" });
// }
// }



import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = req.headers.get('Authorization'); // Get the token from the request headers

  if (!token) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }

  const res = await fetch('http://localhost:5000/api/farmer/milk-production', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token, // Pass the token in the Authorization header
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
const token = localStorage.getItem('token'); // Get the token from storage

const response = await fetch('/api/farmer/milk-production', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  },
  body: JSON.stringify({
    date: selectedDate,
    quantity: parseFloat(quantity),
    deliveryTime: selectedTime,
  }),
});

const data = await response.json();
console.log(data);