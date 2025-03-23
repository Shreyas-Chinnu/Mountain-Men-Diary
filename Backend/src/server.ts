// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db';
// import farmerRoutes from './routes/farmerRoutes';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());

// // Test route
// app.get('/', (req, res) => {
//     res.send('Welcome to Mountain Men Diary, Fresh Milk API');
// });

// app.listen(PORT, () => {
//     console.log(`✅ Server running on port ${PORT}`);
// });
// import express from "express";
// import connectDB from "./config/db";
// import dotenv from "dotenv";
// import farmerRoutes from "./routes/farmerRoutes";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// app.get("/", (_req, res) => res.send("Welcome to Mountain Men Diary, Fresh Milk API"));

// app.use("/api/farmers", farmerRoutes); // ✅ Farmer Routes

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import http from "http";
// import mongoose from "mongoose";
// import app from "./app";
// import { config } from "./config/env"; // Ensure this file exists
// import cors from "cors";
// import farmerRoutes from "./routes/farmerRoutes";  
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));  
// const corsOptions = {
//   origin: process.env.CLIENT_URL || "http://localhost:3000",
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use("/api/farmers", farmerRoutes); // ✅ Farmer Routes
// const PORT = config.PORT || 5000;

// // Create HTTP server
// const server = http.createServer(app);

// // Connect to MongoDB and Start Server
// mongoose
//   .connect(config.MONGO_URI)
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     server.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });

//   app.get("/", (_req, res) => {
//     res.status(200).json({message: "Welcome to Mountain Men Diary API!"});
//   });

// import app from './app';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config(); // Load .env variables

// const PORT = process.env.PORT || 5000;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mountain-men-diary';

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });
import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mountain-men-diary';

console.log('Connecting to MongoDB with URI:', MONGODB_URI); // Add this line

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });