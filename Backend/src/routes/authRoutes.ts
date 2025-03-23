// authRoutes.ts
import express from "express";
import { login } from "../controllers/authController";

const router = express.Router();

router.post("/login", login); // Calls login function from authController.ts

export default router;
