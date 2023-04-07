import { Schema } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>(
  {
    email: { type: String, index: true, required: true, unique: true },
    password: { type: String, requred: true },
  },
  { timestamps: true }
);

export default userSchema;
