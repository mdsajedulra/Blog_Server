/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminService } from "./admin.service";

// USER BLOCKED BY ADMIN

const blockUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const result = await adminService.blockUser(userId);

  sendResponse(res, {
    success: true,
    statudeCode: StatusCodes.OK,
    message: "User blocked successfully",
  });
});

// DELETE BLOGS BY ADMIN

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;

  const [Bearer, token] = req.headers.authorization?.split(" ");

  const payload = { id, token };

  const result = await adminService.deleteBlog(payload);

  if (result) {
    sendResponse(res, {
      success: true,
      statudeCode: StatusCodes.OK,
      message: "Blog deleted successfully",
    });
  }
});

export const adminController = {
  blockUser,
  deleteBlog,
};
