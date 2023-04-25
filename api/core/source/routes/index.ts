import { requestIp } from "../controllers/index.js";
import { Router } from "express";
import cors from 'cors';

const router = Router();
const corsOptions = {
  origin: 'https://ipcats.bohr.io/',
  optionsSuccessStatus: 200
}

router.get('/', cors(corsOptions), requestIp);

export { router };