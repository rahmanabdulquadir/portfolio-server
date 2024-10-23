import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authService } from "./auth.service";

const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);

  if (result?.accessToken) {
    res.cookie("refreshToken", result?.refreshToken);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "login success",
    data: result,
  });
});

export const authController = {
  login,
};