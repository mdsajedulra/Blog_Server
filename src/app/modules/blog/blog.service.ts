/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { Blog } from "./blog.model";
import jwt, { decode, JwtPayload } from "jsonwebtoken";
import User from "../user/user.model";
import { IUser } from "../user/user.interface";

const createBlog = async (payload: IUser) => {
  const result = await Blog.create(payload);
  return result;
};

// update own blog using object id

const updateBlog = async (payload: any) => {
  const { id, token, updateData } = payload;
  // console.log(id);

  const findBlog = await Blog.findById(id.id);
  if (findBlog) {
    // console.log(findBlog?.author);
    const findAuthor = await User.findById(findBlog?.author);
    // console.log(findAuthor);

    try {
      const decoded = jwt.verify(token, "secret") as JwtPayload;

      const { email, role } = decoded;

      if (email === findAuthor?.email) {
        const result = await Blog.findByIdAndUpdate(id.id, updateData, {
          new: true,
        });

        return result;
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  return findBlog;

  // try {
  //   const decoded = jwt.verify(token, "secret"); // Replace "secret" with your actual secret key

  //   if (decoded?.email === "mdsajedulra@gmail.com") {
  //   }
  // } catch (error: unknown) {
  //   console.error("Token verification failed:", error.message);
  // }
  // const result = await Blog.findByIdAndUpdate();
};
const deleteBlog = async (payload: any) => {
  const { id, token, updateData } = payload;
  // console.log(id);

  const findBlog = await Blog.findById(id.id);
  if (findBlog) {
    // console.log(findBlog?.author);
    const findAuthor = await User.findById(findBlog?.author);
    // console.log(findAuthor);

    try {
      const decoded = jwt.verify(token, "secret") as JwtPayload;

      const { email, role } = decoded;

      if (email === findAuthor?.email) {
        const result = await Blog.findByIdAndDelete(id.id, updateData);

        return result;
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  return findBlog;

  // try {
  //   const decoded = jwt.verify(token, "secret"); // Replace "secret" with your actual secret key

  //   if (decoded?.email === "mdsajedulra@gmail.com") {
  //   }
  // } catch (error: unknown) {
  //   console.error("Token verification failed:", error.message);
  // }
  // const result = await Blog.findByIdAndUpdate();
};

// delete own blog using blog id

export const blogServices = {
  createBlog,
  updateBlog,
  deleteBlog,
};
