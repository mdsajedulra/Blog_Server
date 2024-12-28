/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.service";

const register = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await authServices.register(payload);
  sendResponse(res, {
    success: true,
    statudeCode: StatusCodes.CREATED,
    message: "User Registration Successfully",
    data: result,
  });
});

export const authControllers = {
  register,
};
