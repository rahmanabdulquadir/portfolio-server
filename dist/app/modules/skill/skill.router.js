"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRoute = void 0;
const express_1 = require("express");
const skill_controller_1 = require("./skill.controller");
const router = (0, express_1.Router)();
router.post("/create", skill_controller_1.skillController.createSkill);
router.get("/", skill_controller_1.skillController.retrieveSkill);
exports.skillRoute = router;
