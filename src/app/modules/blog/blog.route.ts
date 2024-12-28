import { Router } from "express";
import { blogController } from "./blog.controller";

const blogRoutes = Router();

blogRoutes.post("/", blogController.createBlog);

export default blogRoutes;
