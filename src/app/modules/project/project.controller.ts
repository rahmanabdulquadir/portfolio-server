import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { projectServices } from "./project.services";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.createProjectIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
const getProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.getAllProjectsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "data retrieve success",
    data: result,
  });
});
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectServices.getSingleProjectFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "data retrieve success",
    data: result,
  });
});
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectServices.deleteProjectFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "delete success",
    data: result,
  });
});
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectServices.updateProjectFromDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "update success",
    data: result,
  });
});

export const projectController = {
  createProject,
  getSingleProject,
  getProjects,
  deleteProject,
  updateProject,
};
