import { Router } from 'express';
import { validateParams } from '../middlewares/validations/validateParams.js';
import { createTaskTagSchema, deleteTaskTagSchema } from '../schemas/taskTagSchemas.js';
import { controllerFactory } from '../controllers/controllerFactory.js';

const router = Router();

router.post('/tasks/:taskId/task-tags', validateParams(createTaskTagSchema), controllerFactory.taskTagController.create.bind(controllerFactory.taskTagController));

router.delete('/tasks/:taskId/task-tags/:tagId', validateParams(deleteTaskTagSchema), controllerFactory.taskTagController.delete.bind(controllerFactory.taskTagController));

export default router;
