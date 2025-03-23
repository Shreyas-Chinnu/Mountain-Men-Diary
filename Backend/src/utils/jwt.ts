// jwt.ts
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// Generate JWT Token
export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: "7d" });
};

// Verify JWT Token
export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
