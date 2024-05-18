import express, { NextFunction, Request, Response } from "express";
import hogeController from "./controller/hogeController";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/hoge", hogeController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
