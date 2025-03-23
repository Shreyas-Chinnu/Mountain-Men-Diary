import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    console.log("📩 Login request received");

    await connectDB();
    console.log("✅ DB Connected in Login Route");

    const { email, password } = await req.json();
    console.log("📦 Received Data:", { email });

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User Not Found:", email);
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    console.log("🔐 Comparing Passwords...");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    console.log("✅ Password Matched!");

    if (!process.env.JWT_SECRET) {
      throw new Error("🚨 JWT_SECRET is missing in .env file!");
    }

    console.log("🚀 Generating JWT Token...");
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Server Error in Login Route:", error.message);
    return NextResponse.json({ error: "Server error, please try again.", details: error.message }, { status: 500 });
  }
}
