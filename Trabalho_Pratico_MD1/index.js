import express from "express";
import { promises as fs } from "fs";
import router from "./routers/carros.js";

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, async () => {
  try {
    console.log("API Started");
  } catch (err) {
    console.log(err);
  }
});
