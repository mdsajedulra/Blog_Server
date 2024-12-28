import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserSchema } from "./user.validation";

const userRoute = Router();

userRoute.post("/", validateRequest(UserSchema), userController.createUser);
userRoute.get("/", userController.getUser);

export default userRoute;
