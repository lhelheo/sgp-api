import { Router } from "express";
import { getProjects } from "../controllers/project";

const timeRouter = Router();

timeRouter.get("/", (req, res) => {
  res.json({
    message: "Lista de times",
  });
});

timeRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Detalhes do time com id ${id}`,
  });
});

export default timeRouter;
