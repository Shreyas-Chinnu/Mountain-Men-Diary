import mongoose from "mongoose";

const FarmerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  farmName: { type: String, required: true },
  location: { type: String, required: true },
  milkProduction: { type: Number, default: 0 }, // Total milk produced
}, { timestamps: true });

const Farmer = mongoose.models.Farmer || mongoose.model("Farmer", FarmerSchema);
export default Farmer;
