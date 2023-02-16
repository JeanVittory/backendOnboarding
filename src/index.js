import express from 'express';
import env from './config/env.js';
import cors from 'cors';
import { taskRouter } from './routes/task.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);

app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`));
