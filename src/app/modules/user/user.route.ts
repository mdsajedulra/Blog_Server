import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import auth from "../../middlewares/auth";

const userRoute = Router();

userRoute.post(
  "/",
  validateRequest(userValidation.UserSchema),
  userController.createUser
);
userRoute.get("/", auth("admin"), userController.getUser);

export default userRoute;
