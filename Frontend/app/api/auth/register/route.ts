import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    console.log("📩 Received Register Request");

    await connectDB();
    console.log("✅ Database Connected!");

    const body = await request.json();
    console.log("📦 Received Data:", body);

    if (!body.name || !body.email || !body.password || !body.role) {
      console.log("❌ Missing Fields:", body);
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      console.log("❌ User already exists:", body.email);
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    console.log("🔐 Hashing Password...");
    const hashedPassword = await bcrypt.hash(body.password, 10);

    console.log("🚀 Creating User in Database...");
    const newUser = await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      role: body.role,
    });

    console.log("✅ User Registered Successfully:", newUser.email);
    return NextResponse.json({ message: "Registration successful!" }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Server Error:", error.message);
    return NextResponse.json({ error: "Server error, please try again.", details: error.message }, { status: 500 });
  }
}
