import { Request, Response } from "express";

export const placeOrder = (req: Request, res: Response) => {
  res.json({ message: "Order placed successfully" });
};
