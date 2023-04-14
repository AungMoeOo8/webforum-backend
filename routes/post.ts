import express from "express";
import { PostController } from "../controllers";

const postRoute = express.Router();

postRoute.post("/", PostController.create);

postRoute.get("/", PostController.get);

export default postRoute;
