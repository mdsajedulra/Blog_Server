import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserSchema } from "./user.validation";

const route = Router();

route.post("/", validateRequest(UserSchema), userController.createUser);

export default route;
