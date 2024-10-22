import { Router } from "express";
import { projectController } from "./project.controller";


const router=Router()

router.post('/create',projectController.createProject)
router.get('/',projectController.getProjects)
router.get('/:id',projectController.getSingleProject)
router.delete('/delete/:id',projectController.deleteProject)
router.patch('/update/:id',projectController.updateProject)

export const projectRoute = router