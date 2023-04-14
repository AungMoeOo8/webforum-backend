import { Request, Response } from "express";
import ForumModel from "../schemas/forum";

export default class ForumController {
  public static async create(req: Request, res: Response) {
    const doc = await ForumModel.create({ name: "Nodejs Fans" });

    res.json({ doc });
  }

  public static async get(req: Request, res: Response) {
    const doc = await ForumModel.find({});

    res.json({ doc });
  }
}
