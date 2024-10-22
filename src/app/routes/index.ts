import express from "express";
import { projectRoute } from "../modules/project/project.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/projects",
    route: projectRoute,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
