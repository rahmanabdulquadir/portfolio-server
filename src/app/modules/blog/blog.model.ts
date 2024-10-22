import { model, Schema } from "mongoose"
import { IBlog } from "./blog.router"

const blogSchema=new Schema<IBlog>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
})

export const Blog =model<IBlog>("Blog",blogSchema)