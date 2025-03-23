import { Request, Response } from "express";

export const updateMilkProduction = (req: Request, res: Response) => {
  res.json({ message: "Milk production updated" });
};
