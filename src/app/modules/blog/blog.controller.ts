import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await blogServices.createBlog(payload);

  sendResponse(res, {
    statudeCode: StatusCodes.OK,
    success: true,
    message: "Blog Created Successfully",
    data: result,
  });
});

export const blogController = {
  createBlog,
};
