import { Blog } from "./blog.model"
import { IBlog } from "./blog.interface"

const createBlogIntoDB=async(payload:IBlog)=>{
  const result=await Blog.create(payload)

  return result
}
const getBlogFromDB=async()=>{
  const result=await Blog.find()

  return result
}
const getSingleBlogFromDB=async(id:string)=>{
  const result=await Blog.findById(id)

  return result
}

export const blogServices={
  createBlogIntoDB,
  getBlogFromDB,
  getSingleBlogFromDB
}