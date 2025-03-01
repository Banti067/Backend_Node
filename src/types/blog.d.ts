import { Document } from "mongoose";
import USER_TYPE from "./user";

export default interface BLOG_TYPE extends Document {
  userId: USER_TYPE;
  title: string;
  text: string;
  description: string;
  email: string;
}

// import { model, Model, Schema } from "mongoose";
// import { VISITOR_TYPE } from "../types";

// const visitorSchema = new Schema<VISITOR_TYPE, Model<VISITOR_TYPE>>(
//   {
//     time: String,
//     deviceType: {
//       type: String,
//       enum: {
//         values: ["DESKTOP", "MOBILE", "TABLET", "OTHER", "MAC"],
//       },
//       default: "OTHERS",
//     },
//   },
//   { timestamps: true }
// );
// const VisitorSchema = model<VISITOR_TYPE, Model<VISITOR_TYPE>>(
//   "Visitor",
//   visitorSchema
// );
// export default VisitorSchema;
