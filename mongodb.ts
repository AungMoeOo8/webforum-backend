import mongoose from "mongoose";
import dotenv from "dotenv";
import { Database } from "./types";

dotenv.config();

const mongodbUrl = process.env.MONGODBURL || "";

class MongoDatabase implements Database<typeof mongoose> {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async connect() {
    return await mongoose.connect(this.url);
  }
}

const db = new MongoDatabase(mongodbUrl);

export default db;
