import express from "express";
import { placeOrder } from "../controllers/customerController";

const router = express.Router();

router.post("/order", placeOrder);

export default router;
