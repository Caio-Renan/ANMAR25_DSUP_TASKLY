import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createNoteSchema, updateNoteSchema, findNoteByIdSchema, deleteNoteSchema } from '../schemas/noteSchemas';

const router = Router();

router.get('/tasks/:taskId/notes', (req, res) => {
    res.json({ message: 'Validation passed!' });
});
router.post('/tasks/:taskId/notes', validateBody(createNoteSchema) , (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.get('/notes/:id', validateParams(findNoteByIdSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.put('/notes/:id', validateParams(updateNoteSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.delete('/notes/:id', validateParams(deleteNoteSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

export default router;