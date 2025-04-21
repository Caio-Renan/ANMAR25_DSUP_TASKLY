import { Router } from 'express';
import { validateParams } from '../middlewares/validations/validateParams';
import { createTaskTagSchema, deleteTaskTagSchema } from '../schemas/taskTagSchemas';
import { controllerFactory } from '../controllers/controllerFactory';

const router = Router();

router.post('/tasks/:taskId/task-tags', validateParams(createTaskTagSchema), controllerFactory.taskTagController.create.bind(controllerFactory.taskTagController));

router.delete('/tasks/:taskId/task-tags/:tagId', validateParams(deleteTaskTagSchema), controllerFactory.taskTagController.delete.bind(controllerFactory.taskTagController));

export default router;
