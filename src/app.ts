import express from 'express';
import { router } from './routes/routes';

const app = express();

app.use(express.json());
app.use('/task', router);

export { app }