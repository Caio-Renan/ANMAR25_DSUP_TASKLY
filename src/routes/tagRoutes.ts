import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createTagSchema, updateTagSchema, findTagByIdSchema, deleteTagSchema } from '../schemas/tagSchemas';

const router = Router();

router.get('/tags', (req, res) => {
    res.json({ message: 'Validation passed!' });
});
router.post('/tags', validateBody(createTagSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.get('/tags/:id', validateParams(findTagByIdSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.put('/tags/:id', validateParams(updateTagSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.delete('/tags/:id', validateParams(deleteTagSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

export default router;
