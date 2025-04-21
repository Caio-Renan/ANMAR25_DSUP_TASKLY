import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createTaskSchema, updateTaskSchema, findTaskByIdSchema, deleteTaskSchema } from '../schemas/taskSchemas';

const router = Router();

router.get('/tasks', (req, res) => {
    res.json({ message: 'Validation passed!' });
});
router.post('/tasks', validateBody(createTaskSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.get('/tasks/status/:status', (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.get('/tasks/:id', validateParams(findTaskByIdSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.put('/tasks/:id', validateParams(updateTaskSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.delete('/tasks/:id', validateParams(deleteTaskSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

export default router;