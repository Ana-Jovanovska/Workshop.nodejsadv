import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { globalRouter } from "./src/const/router.const.js";

const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(MONGO_URL);

const app = express();

app.use(express.json());

app.use("/api", globalRouter);

app.listen(process.env.PORT, process.env.HOST, async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongDB");
    console.log(`Server is up at port: ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
