import express from "express";
import { projectRoute } from "../modules/project/project.router";
import { blogRoute } from "../modules/blog/blog.router";
import { skillRoute } from "../modules/skill/skill.router";
import { authRouter } from "../modules/auth/auth.router";

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
  {
    path: "/skills",
    route: skillRoute,
  },
  {
    path: "/auth",
    router: authRouter,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
