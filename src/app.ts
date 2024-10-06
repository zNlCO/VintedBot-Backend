import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './api/api.routes';

const app = express();

app.use(cors());
app.use(morgan('tiny'));

app.use('/api', apiRouter);

export default app;