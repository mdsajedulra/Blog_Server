import express, { Application, Request, Response } from "express";
import router from "./app/routes/routes";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome to the Blog Website API" });
});
app.use(globalErrorHandler);
// unknown route error handle
app.use(notFound);

export default app;
