import { Router } from "express";
import { blogController } from "./blog.controller";
import auth from "../../middlewares/auth";
import { BlogSchema } from "./blog.validation";
import validateRequest from "../../middlewares/validateRequest";

const blogRoutes = Router();

blogRoutes.post(
  "/",
  validateRequest(BlogSchema),
  auth("user"),
  blogController.createBlog
);

blogRoutes.patch("/:id", blogController.updateBlog);

export default blogRoutes;
