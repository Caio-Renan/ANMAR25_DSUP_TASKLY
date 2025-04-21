import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody.js';
import { validateParams } from '../middlewares/validations/validateParams.js';
import { createTaskSchema, updateTaskSchema, findTaskByIdSchema, deleteTaskSchema, findTasksByStatusSchema } from '../schemas/taskSchemas.js';
import { controllerFactory } from '../controllers/controllerFactory.js';

const router = Router();

router.get('/tasks',(req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.post('/tasks', validateBody(createTaskSchema), controllerFactory.taskController.create.bind(controllerFactory.taskController));

router.get('/tasks/status/:status', validateParams(findTasksByStatusSchema), controllerFactory.taskController.findTasksByStatus.bind(controllerFactory.taskController));

router.get('/tasks/:id', validateParams(findTaskByIdSchema), controllerFactory.taskController.findById.bind(controllerFactory.taskController));

router.put('/tasks/:id', validateParams(updateTaskSchema), controllerFactory.taskController.update.bind(controllerFactory.taskController));

router.delete('/tasks/:id', validateParams(deleteTaskSchema), controllerFactory.taskController.delete.bind(controllerFactory.taskController));

export default router;