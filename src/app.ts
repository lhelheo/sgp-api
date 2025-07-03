import express from "express";
import cors from "cors";
import helmet from "helmet";
import timeRouter from "../api/routes/project";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use("/time", timeRouter);

export default app;
