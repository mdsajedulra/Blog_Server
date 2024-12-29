/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Blog } from "../blog/blog.model";
import User from "../user/user.model";
import jwt, { JwtPayload } from "jsonwebtoken";

// block user

const blockUser = async (payload: any) => {
  //   console.log(payload);

  const userBlock = await User.findById(payload);
  //   console.log(userBlock);

  if (userBlock?.isBlocked === true) {
    throw new Error("User Already Blocked");
  }

  const result = await User.findByIdAndUpdate(
    payload,
    { isBlocked: true },
    { new: true }
  );
  return result;
};

// delete blogs

const deleteBlog = async (payload: any) => {
  const { id, token } = payload;
  // console.log(id);

  const findBlog = await Blog.findById(id);
  if (!findBlog) {
    throw new Error("Blog not found");
  }
  if (findBlog) {
    // console.log(findBlog?.author);
    const findAuthor = await User.findById(findBlog?.author);
    // console.log(findAuthor);

    try {
      const decoded = jwt.verify(token, "secret") as JwtPayload;

      const { email, role } = decoded;

      if (email === findAuthor?.email && role === findAuthor?.role) {
        const result = await Blog.findByIdAndDelete(id);

        return result;
      } else if (role === "admin") {
        const result = await Blog.findByIdAndDelete(id);

        return result;
      }
    } catch (error: any) {
      throw new Error("Something went worng");
    }
  }
};

export const adminService = {
  blockUser,
  deleteBlog,
};
