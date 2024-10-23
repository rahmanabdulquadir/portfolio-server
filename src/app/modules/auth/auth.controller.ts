const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);

  if (result?.accessToken) {
    res.cookie("refeshToken", result?.refreshToken);
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