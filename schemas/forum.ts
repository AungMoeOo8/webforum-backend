import mongoose, { Schema } from "mongoose";

const forumSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  { timestamps: true }
);

const ForumModel = mongoose.model("Forum", forumSchema);

export default ForumModel;
