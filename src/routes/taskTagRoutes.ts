import { Router } from 'express';
import { validateParams } from '../middlewares/validations/validateParams';
import { createTaskTagSchema, deleteTaskTagSchema } from '../schemas/taskTagSchemas';

const router = Router();

router.post('/tasks/:taskId/task-tags', validateParams(createTaskTagSchema), async (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.delete('/tasks/:taskId/task-tags/:tagId', validateParams(deleteTaskTagSchema), async (req, res) => {
    res.json({ message: 'Validation passed!' });
});

export default router;
