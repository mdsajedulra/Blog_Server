import { IUser } from "../user/user.interface";
import User from "../user/user.model";

const register = (payload: IUser) => {
  const result = User.create(payload);
  return result;
};

export const authServices = {
  register,
};
