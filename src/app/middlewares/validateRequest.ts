/* eslint-disable @typescript-eslint/no-unused-vars */
import catchAsync from "../utils/catchAsync";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
    });
  });
};

export default validateRequest;
