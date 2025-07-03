import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

export default app;
