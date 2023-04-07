import mongoose from "mongoose";
import { userSchema } from "./schemas";
import { IUser } from "./types";

const User = mongoose.model<IUser>("User", userSchema);

export { User };
