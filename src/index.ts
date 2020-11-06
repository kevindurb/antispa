import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { router } from './routes';

dotenv.config();
const PORT = process.env.PORT ?? 8080;

const app = express();
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, '../src/views'));

app.use(router);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
