import express, { Express } from "express";
import { router } from "./routes/index";

const app: Express = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

export { app };