import { Router } from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";

import { authValidation } from "./auth.validation";
import { userValidation } from "../user/user.validation";

const authRouter = Router();

authRouter.post(
  "/register",
  validateRequest(userValidation.UserSchema),
  authControllers.register
);
authRouter.post(
  "/login",
  validateRequest(authValidation.loginValidationSchema),
  authControllers.login
);

export default authRouter;
