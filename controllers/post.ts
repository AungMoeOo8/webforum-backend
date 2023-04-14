import { Request, Response } from "express";
import mongoose from "mongoose";
import PostModel from "../schemas/post";

export default class PostController {
  public static async create(req: Request, res: Response) {
    const { userId, forumId } = req.body;

    const post = await PostModel.create({
      title: "Lord of the Rings",
      body: "lord of the rings",
      owner: new mongoose.Types.ObjectId(userId),
      forum: new mongoose.Types.ObjectId(forumId),
    });

    res.json({ post });
  }

  public static async get(req: Request, res: Response) {
    const { userId, forumId } = req.query;

    const doc = await PostModel.find({
      owner: new mongoose.Types.ObjectId(userId?.toString()),
    });

    res.json({ doc });
  }
}
