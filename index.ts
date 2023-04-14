import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoute from "./apiRoutes";
import db from "./mongodb";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRoute);

app.use(express.static("public"));

async function start() {
  await db.connect();

  console.log("db connected");
  app.listen(5000, () => console.log("Server started"));
}

start();
