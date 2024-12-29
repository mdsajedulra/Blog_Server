/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.service";

// user registration
const register = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await authServices.register(payload);
  sendResponse(res, {
    success: true,
    statudeCode: StatusCodes.CREATED,
    message: "User registered successfully",
    data: {
      _id: result?._id,
      name: result?.name,
      email: result?.email,
    },
  });
});

// user login

const login = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await authServices.login(payload);
  sendResponse(res, {
    success: true,
    statudeCode: StatusCodes.CREATED,
    message: "Login successful",
    data: {
      token: result.token,
    },
  });
});

export const authControllers = {
  register,
  login,
};
