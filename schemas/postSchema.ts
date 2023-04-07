import { Schema } from "mongoose";
import { User } from "../models";

const postSchema = new Schema(
  {
    title: String,
    body: String,
    ownerId: { type: Schema.Types.ObjectId, required: true },
    forumId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);
