import { Model, Schema, model } from "mongoose";
import { USER_TYPE } from "../types";

const userSchema = new Schema<USER_TYPE, Model<USER_TYPE>>(
  {
    role: {
      type: String,
      enum: ["USER", "SUPER-ADMIN"],
      default: "USER",
    },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: Number },
    country: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
    },
    age: { type: Number },
    address: { type: String },
  },
  { timestamps: true }
);

const UserSchema = model<USER_TYPE, Model<USER_TYPE>>("User", userSchema);
export default UserSchema;
