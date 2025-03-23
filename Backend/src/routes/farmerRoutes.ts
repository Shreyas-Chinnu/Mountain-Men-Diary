import express from "express";
import { updateMilkProduction } from "../controllers/farmerController";

const router = express.Router();

router.post("/update-milk", updateMilkProduction);

export default router;
