import { Router } from "express";
import { authControllers } from "./auth.controller";

const authRouter = Router();

authRouter.post("/register", authControllers.register);

export default authRouter;
