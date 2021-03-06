import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { router } from './routes';

dotenv.config();
const PORT = process.env.PORT ?? 8080;

const app = express();
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, '../src/views'));
app.enable('etag');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(router);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
