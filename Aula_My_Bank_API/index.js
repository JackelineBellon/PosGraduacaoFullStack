import express, { json } from "express";
import accountRouter from "./routes/accounts.js";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());

app.use("/accounts", accountRouter);

app.listen(3000, async () => {
  try {
    await readFile("accounts.json");
    console.log("API Started");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile("accounts.json", JSON.stringify(initialJson))
      .then(() => {
        console.log("API Started and File Created!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
