import express from "express";
import cors from "cors";
import helmet from "helmet";
import timeRouter from "../api/routes/project";
import { getProjects } from "../api/controllers/project";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use("/time", timeRouter);
app.use("/projects", getProjects); // TODO: Corrigir depois

export default app;
