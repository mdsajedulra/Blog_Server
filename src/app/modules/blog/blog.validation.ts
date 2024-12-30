import { z } from "zod";

export const BlogSchema = z.object({
  body: z.object({
    // Wrap 'body' in z.object
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    author: z.string().optional(), // Validate ObjectId

    isPublished: z.boolean().default(true),
  }),
});
