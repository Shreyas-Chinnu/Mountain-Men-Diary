// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mshreyas336:mountainmendiary@mmd.6wftg.mongodb.net/Mountain-Men-Diary?tls=true';

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;

// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI!;

// const connectDB = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     console.log("⚡ Using existing database connection");
//     return;
//   }

//   try {
//     await mongoose.connect(MONGO_URI, { 
//       useNewUrlParser: true, 
//       useUnifiedTopology: true 
//     } as any); // 👈 Type assertion fixes TypeScript issues

//     console.log("✅ Database Connected Successfully!");
//   } catch (error) {
//     console.error("❌ Database Connection Failed:", error);
//   }
// };

// export default connectDB;





import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("⚡ Using existing database connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "Mountain-Men-Diary",
    });
    console.log("✅ Database Connected Successfully!");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
  }
};

export default connectDB;
