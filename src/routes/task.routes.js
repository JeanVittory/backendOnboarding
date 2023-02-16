import { Router } from 'express';
import {
	getTask,
	getTasks,
	putTask,
	deleteTask,
	postTask,
} from '../controllers/task.controller.js';

const taskRouter = Router();

taskRouter.get('/tasks', getTasks);
taskRouter.get('/tasks/:id', getTask);
taskRouter.post('/tasks', postTask);
taskRouter.put('/tasks/:id', putTask);
taskRouter.delete('/tasks/:id', deleteTask);

export { taskRouter };
