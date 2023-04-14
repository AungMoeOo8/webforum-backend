import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
  profilePhotoUrl: String,
  coverPhotoUrl: String,
});

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, index: true, required: true, unique: true },
    password: { type: String, required: true },
    profile: profileSchema,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
