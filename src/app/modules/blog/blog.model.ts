import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
