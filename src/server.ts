import express, {
  urlencoded,
} from "express";
import cors from "cors";
import helmet from "helmet";
import { mainRouter } from "./api/routes/main";

const server = express();
server.use(helmet());
server.use(cors());
server.use(
  urlencoded({ extended: true })
);
server.disable("x-powered-by");
server.use(express.json());

server.use(mainRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}`
  );
});

export default server;
