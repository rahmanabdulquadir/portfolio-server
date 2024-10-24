import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
});

export const Blog = model<IBlog>("Blog", blogSchema);
