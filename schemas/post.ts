import mongoose, { Schema } from "mongoose";

export const postSchema = new Schema(
  {
    title: { type: String, require: true },
    body: { type: String, require: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    forum: { type: Schema.Types.ObjectId, ref: "Forum", required: true },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
