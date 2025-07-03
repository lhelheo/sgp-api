import app from "./app";
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}`
  );
});

// export const mainRouter = Router();
// mainRouter.get("/ping", (req, res) => {
//   res.json({ message: "pong" });
// });
