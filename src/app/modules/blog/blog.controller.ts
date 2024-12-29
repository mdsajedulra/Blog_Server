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

// update blog

const updateBlog = catchAsync(async (req, res) => {
  const id = req.params;
  const token = req.headers.authorization;
  const updateData = req.body;
  const payload = { id, token, updateData };

  const result = await blogServices.updateBlog(payload);
  sendResponse(res, {
    success: true,
    statudeCode: StatusCodes.OK,
    message: "Blog updated successfully",
    data: result,
  });
});

export const blogController = {
  createBlog,
  updateBlog,
};
