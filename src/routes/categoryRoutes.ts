import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createCategorySchema, updateCategorySchema, findCategoryByIdSchema, deleteCategorySchema } from '../schemas/categorySchemas';

const router = Router();

router.get('/categories', (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.post('/categories', validateBody(createCategorySchema), (req, res, next) => {
    res.json({ message: 'Validation passed!' });
});

router.get('/categories/:id', validateParams(findCategoryByIdSchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.put('/categories/:id', validateParams(updateCategorySchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

router.delete('/categories/:id', validateParams(deleteCategorySchema), (req, res) => {
    res.json({ message: 'Validation passed!' });
});

export default router;