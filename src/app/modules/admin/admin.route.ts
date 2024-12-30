import { Router } from "express";
import { adminController } from "./admin.controller";
import auth from "../../middlewares/auth";

const adminRouter = Router();

adminRouter.patch(
  "/users/:userId/block",
  auth("admin"),
  adminController.blockUser
);
adminRouter.delete("/blogs/:id", auth("admin"), adminController.deleteBlog);

export default adminRouter;
