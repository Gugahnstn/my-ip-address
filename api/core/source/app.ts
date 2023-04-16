import { router } from "./routes/index.js";
import express, { Express } from "express";

const app: Express = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

export { app };