import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const result = await blogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
const getBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getBlogFromDB();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.getSingleBlogFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});

export const blogController = {
  createBlog,
  getBlog,
  getSingleBlog,
};
