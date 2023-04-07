import { Request, Response } from "express";

export default class PostController {
  public static async create() {}

  public static async get(req: Request, res: Response) {
    // const { ownerId } = req.query;
    const data = [
      "What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.",
      "Hello World",
      "Api testing",
      "Game of throne",
      "Home of the dragon",
      "Lord of the ring",
      "Ring of power",
    ];
    res.json({ data: data });
  }
}
