import { Router } from "express";
import CreateRemainderDto from "../dtos/create-remainder";
import Remainder from "../models/remainder";

const router = Router();

const remainders:Remainder[] = [];

router.get("/", (req, res) => {
  res.json(remainders)
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateRemainderDto;
  const remainder = new Remainder(title);
  remainders.push(remainder)
  res.status(201).json(remainders);
});

export default router;
