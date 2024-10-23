import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { User } from "../user/user";
import { IAuth } from "./auth.interface";
import jwt from "jsonwebtoken";
import config from "../../config";

const login = async (payload: IAuth) => {
  const isUserExists = await User?.findOne(payload);

  if (!isUserExists) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      "Please Login in with Right Information"
    );
  }
  const userInfo = {
    userId: isUserExists?._id,
    userName: isUserExists?.name,
    userEmail: isUserExists?.email,
    userRole: isUserExists?.role,
  };
  const accessToken = jwt.sign(userInfo, config.accessToken_Secret as string, {
    expiresIn: config.accessToken_ExpiresIn,
  });
  const refreshToken = jwt.sign(
    userInfo,
    config.refreshToken_Secret as string,
    { expiresIn: config.refreshToken_ExpiresIn }
  );

  return { accessToken, refreshToken };
};

export const authService = {
  login,
};