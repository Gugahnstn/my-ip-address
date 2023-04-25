import express, { Express } from "express";
import { router } from "./routes/index";
import cors from 'cors';

const app: Express = express();
const corsOptions = {
  origin: 'https://ipcats.bohr.io/',
  optionsSuccessStatus: 200
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);
app.use(cors(corsOptions));

export { app };