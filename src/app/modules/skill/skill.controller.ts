import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillServices } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
  const result = await skillServices.createSkillIntoDB(req.body);

  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
const retrieveSkill = catchAsync(async (req, res) => {
  const result = await skillServices.retrieveSkillFromDB();

  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});


export const skillController={
    createSkill,
    retrieveSkill
}