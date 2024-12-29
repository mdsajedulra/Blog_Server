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

// get all block

const getBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getBlogs();

  sendResponse(res, {
    statudeCode: StatusCodes.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

// update blog

const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
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

// delete blog

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;

  const token = req.headers.authorization;

  const payload = { id, token };

  const result = await blogServices.deleteBlog(payload);

  if (result) {
    sendResponse(res, {
      success: true,
      statudeCode: StatusCodes.OK,
      message: "Blog deleted successfully",
    });
  }
});

export const blogController = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
