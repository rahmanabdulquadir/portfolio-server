import express from "express";
import { projectRoute } from "../modules/project/project.router";
import { blogRoute } from "../modules/blog/blog.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/projects",
    route: projectRoute,
  },
  {
    path: "/blogs",
    route: blogRoute,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
