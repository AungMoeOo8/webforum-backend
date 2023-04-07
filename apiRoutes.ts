import express from "express";
import { authRoute } from "./routes";
import postRoute from "./routes/postRoute";

const apiRoute = express.Router();

apiRoute.use("/auth", authRoute);

apiRoute.use("/posts", postRoute);

export default apiRoute;
