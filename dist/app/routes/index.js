"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_router_1 = require("../modules/project/project.router");
const blog_router_1 = require("../modules/blog/blog.router");
const skill_router_1 = require("../modules/skill/skill.router");
const auth_router_1 = require("../modules/auth/auth.router");
const router = (0, express_1.Router)();
const moduleRouter = [
    {
        path: "/projects",
        router: project_router_1.projectRoute,
    },
    {
        path: "/blogs",
        router: blog_router_1.blogRoute,
    },
    {
        path: "/skills",
        router: skill_router_1.skillRoute,
    },
    {
        path: "/auth",
        router: auth_router_1.authRouter,
    },
];
moduleRouter === null || moduleRouter === void 0 ? void 0 : moduleRouter.forEach((route) => router.use(route.path, route.router));
exports.default = router;
