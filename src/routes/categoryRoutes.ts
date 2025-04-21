import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createCategorySchema, updateCategorySchema, findCategoryByIdSchema, deleteCategorySchema } from '../schemas/categorySchemas';
import { controllerFactory } from '../controllers/controllerFactory';

const router = Router();

router.get('/categories', controllerFactory.categoryController.findAll.bind(controllerFactory.categoryController));

router.post('/categories', validateBody(createCategorySchema), controllerFactory.categoryController.create.bind(controllerFactory.categoryController));

router.get('/categories/:id', validateParams(findCategoryByIdSchema), controllerFactory.categoryController.findById.bind(controllerFactory.categoryController));

router.put('/categories/:id', validateParams(updateCategorySchema), controllerFactory.categoryController.update.bind(controllerFactory.categoryController));

router.delete('/categories/:id', validateParams(deleteCategorySchema), controllerFactory.categoryController.delete.bind(controllerFactory.categoryController));

export default router;