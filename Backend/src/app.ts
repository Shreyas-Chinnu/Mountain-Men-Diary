import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";  // ✅ Importing routes correctly
import farmerRoutes from "./routes/farmerRoutes";
import customerRoutes from "./routes/customerRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

// ✅ Make sure these match what you exported
app.use("/api/auth", authRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/admins", adminRoutes);

export default app;
