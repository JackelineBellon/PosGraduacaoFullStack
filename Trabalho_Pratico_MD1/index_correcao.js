import express from "express";
import brandRouter from "./routers/brands_correcao.js";

const app = express();
app.use(express.json());
app.use("/marcas", brandRouter);
app.listen(3000, () => console.log("API Started!"));
