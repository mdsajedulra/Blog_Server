import { User } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog = async (payload: User) => {
  const result = await Blog.create(payload);
  return result;
};

export const blogServices = {
  createBlog,
};
