/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

// create user
const createUser = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await userService.createUser(payload);

  sendResponse(res, {
    statudeCode: StatusCodes.CREATED,
    success: true,
    message: "User Create successfully",
    data: result,
  });
});

// get user

const getUser = catchAsync(async (req, res, next) => {
  const result = await userService.getUser();
  sendResponse(res, {
    statudeCode: StatusCodes.CREATED,
    success: true,
    message: "User Create successfully",
    data: result,
  });
});
export const userController = {
  createUser,
  getUser,
};
