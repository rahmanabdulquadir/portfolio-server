import { Router } from "express";
import { projectRoute } from "../modules/project/project.router";
import { blogRoute } from "../modules/blog/blog.router";
import { skillRoute } from "../modules/skill/skill.router";
import { authRouter } from "../modules/auth/auth.router";

const router = Router();

const moduleRouter = [
  {
    path: "/projects",
    router: projectRoute,
  },
  {
    path: "/blogs",
    router: blogRoute,
  },
  {
    path: "/skills",
    router: skillRoute,
  },
  {
    path: "/auth",
    router: authRouter,
  },
];

moduleRouter?.forEach((route) => router.use(route.path, route.router));


export default router
