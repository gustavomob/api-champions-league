import dotenv from 'dotenv';
import express, { json } from 'express';
import { router } from './routes';

dotenv.config();

const app = express();
app.use(json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
