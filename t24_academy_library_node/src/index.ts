import express, { NextFunction, Request, Response } from "express";
import hogeController from "./controller/hogeController";
import loginController from "./controller/loginController";
import registerController from "./controller/registerController";
import bodyParser from "body-parser";
import { app as firebaseApp } from "../lib/firebase";

const app = express();
const port = 3000;

// Firebase Initialize
firebaseApp;
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static('./src/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/hoge", hogeController);
app.get("/login", loginController.index);
app.post("/login", loginController.login);
app.get("/register", registerController.index);
app.post("/register", registerController.signUp);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
