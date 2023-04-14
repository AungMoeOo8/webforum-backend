import express from "express";
import { authRoute, postRoute, forumRoute } from "./routes";

const apiRoute = express.Router();

apiRoute.use("/auth", authRoute);

apiRoute.use("/posts", postRoute);

apiRoute.use("/forums", forumRoute);

export default apiRoute;
