import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  permissions: { type: [String], default: ["manage_users", "view_reports"] }, // Example permissions
}, { timestamps: true });

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
export default Admin;
