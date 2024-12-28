import { Response } from "express";

type TResponse<T> = {
  statudeCode: number;
  success: boolean;
  message: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(res.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
