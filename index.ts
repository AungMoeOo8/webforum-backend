import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import apiRoute from "./apiRoutes";

dotenv.config();

const mongodbUrl = process.env.MONGODBURL || "";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRoute);

app.use(express.static("public"));

async function start() {
  await mongoose.connect(mongodbUrl);

  console.log("db connected");
  app.listen(5000, () => console.log("Server started"));
}

start();
