import { IUser } from "../user/user.interface";
import User from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// user registration
const register = (payload: IUser) => {
  const result = User.create(payload);
  return result;
};

// user login

const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload?.email });
  if (!user) {
    throw new Error("User not Found");
  }
  const userStatus = user?.isBlocked;
  if (userStatus === true) {
    throw new Error("User is Blocked");
  }

  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    user?.password
  );
  if (!isPasswordMatch) {
    throw new Error("Password incorrect");
  }
  const token = jwt.sign({ email: user?.email, role: user?.role }, "secret", {
    expiresIn: "1d",
  });

  return { token, user };
};

export const authServices = {
  register,
  login,
};
