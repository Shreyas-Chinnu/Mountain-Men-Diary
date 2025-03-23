// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const MONGO_URI = process.env.MONGO_URI;

// if (!MONGO_URI) {
//   throw new Error("❌ MONGO_URI is not defined! Check your .env file.");
// }

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("🔥 MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed", error);
//     process.exit(1);
//   }
// };



// // import mongoose from "mongoose";

// // const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://mshreyas336:mountainmendiary@mmd.6wftg.mongodb.net/Mountain-Men-Diary?tls=true";

// // export const connectDB = async () => {
// //   if (mongoose.connection.readyState >= 1) return;
// //   try {
// //     await mongoose.connect(MONGO_URI, { dbName: "Mountain-Men-Diary" });
// //     console.log("✅ MongoDB Connected");
// //   } catch (error) {
// //     console.error("❌ MongoDB Connection Error:", error);
// //   }
// // };

// // export default connectDB;
// // import mongoose from 'mongoose';

// // const MONGO_URI = process.env.MONGO_URI || '';

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(MONGO_URI);
// //     console.log('✅ MongoDB Connected');
// //   } catch (error) {
// //     console.error('❌ MongoDB Connection Error:', error);
// //     process.exit(1); // Stop the app if DB fails
// //   }
// // };

// // export default connectDB;

// src/config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

export default connectDB;
