import express, { Application, Request, Response } from "express";
import router from "./routes/routes";
import cors from "cors";
import notFound from "./middlewares/notFound";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome to the Blog Website API" });
});

// unknown route error handle
app.use(notFound);

export default app;
