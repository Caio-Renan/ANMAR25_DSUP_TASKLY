import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createNoteSchema, createNoteTaskIdSchema, updateNoteSchema, findNoteByIdSchema, findNotesByTaskIdSchema, deleteNoteSchema } from '../schemas/noteSchemas';

const router = Router();

router.get('/tasks/:taskId/notes', validateParams(findNotesByTaskIdSchema),(req, res) => {
    res.json({ message: 'Validation passed!' });
});
router.post('/tasks/:taskId/notes', validateParams(createNoteTaskIdSchema), validateBody(createNoteSchema) , (req, res) => {
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