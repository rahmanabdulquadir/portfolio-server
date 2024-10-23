/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from "mongoose";
import AppError from "../../errors/AppError";
import { StatusCodes } from "http-status-codes";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "Admin";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

const UserData = {
  name: "Rahman Abdul Quadir",
  email: "rahman@gmail.com",
  role: "Admin",
  password: "rahman123",
};

export const User = model<IUser>("User", userSchema);

export const seed = async () => {
  try {
    const isUserExists = await User?.findOne(UserData);
    if (!isUserExists) {
      await User?.create(UserData);
    }
  } catch (error: any) {
    throw new AppError(StatusCodes.FORBIDDEN, error?.message);
  }
};