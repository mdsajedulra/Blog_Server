import { Router } from "express";
import blogRoutes from "../modules/blog/blog.route";
import route from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/blogs",
    route: blogRoutes,
  },
  {
    path: "/auth/register",
    route: route,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
