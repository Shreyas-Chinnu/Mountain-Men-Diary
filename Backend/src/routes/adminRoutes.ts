import express from "express";
import { getDashboard } from "../controllers/adminController";

const router = express.Router();

router.get("/dashboard", getDashboard);

export default router;
