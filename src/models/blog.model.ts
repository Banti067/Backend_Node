import { Model, Schema, model } from "mongoose";
import { BLOG_TYPE, USER_TYPE } from "../types";

const blogSchema = new Schema<BLOG_TYPE, Model<BLOG_TYPE>>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
});

const BlogSchema = model<BLOG_TYPE, Model<BLOG_TYPE>>("Blog", blogSchema);
export default BlogSchema;
