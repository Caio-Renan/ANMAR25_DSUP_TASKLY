import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody.js';
import { validateParams } from '../middlewares/validations/validateParams.js';
import  validateQuery  from '../middlewares/validations/validateQuery.js';
import { createTaskSchema, updateTaskSchema, findTaskByIdSchema, deleteTaskSchema, findTasksByStatusSchema } from '../schemas/taskSchemas.js';
import { controllerFactory } from '../controllers/controllerFactory.js';
import { paginationTaskQuerySchema, paginationTaskStatusQuerySchema } from '../schemas/paginationSchemas.js';

const router = Router();

router.get('/tasks', validateQuery(paginationTaskQuerySchema), controllerFactory.taskController.index.bind(controllerFactory.taskController), controllerFactory.taskController.findAll);

router.post('/tasks', validateBody(createTaskSchema), controllerFactory.taskController.create.bind(controllerFactory.taskController));

router.get('/tasks/status/:status', validateParams(findTasksByStatusSchema), validateQuery(paginationTaskStatusQuerySchema), controllerFactory.taskController.findTasksByStatus.bind(controllerFactory.taskController));

router.get('/tasks/:id', validateParams(findTaskByIdSchema), controllerFactory.taskController.findById.bind(controllerFactory.taskController));

router.put('/tasks/:id', validateParams(updateTaskSchema), controllerFactory.taskController.update.bind(controllerFactory.taskController));

router.delete('/tasks/:id', validateParams(deleteTaskSchema), controllerFactory.taskController.delete.bind(controllerFactory.taskController));

export default router;