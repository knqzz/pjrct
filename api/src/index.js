import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import AlunoController from './controller/AlunoController.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(AlunoController);

servidor.listen(process.env.PORT, () => console.log('API Subiu!'));