import express from "express";
import { ForumController } from "../controllers";

const forumRoute = express.Router();

forumRoute.post("/", ForumController.create);

forumRoute.get("/", ForumController.get);

export default forumRoute;
