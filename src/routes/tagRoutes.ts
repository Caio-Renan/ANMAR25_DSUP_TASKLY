import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createTagSchema, updateTagSchema, findTagByIdSchema, deleteTagSchema } from '../schemas/tagSchemas';
import { controllerFactory } from '../controllers/controllerFactory';

const router = Router();

router.get('/tags', controllerFactory.tagController.findAll.bind(controllerFactory.tagController));

router.post('/tags', validateBody(createTagSchema), controllerFactory.tagController.create.bind(controllerFactory.tagController));

router.get('/tags/:id', validateParams(findTagByIdSchema), controllerFactory.tagController.findById.bind(controllerFactory.tagController));

router.put('/tags/:id', validateParams(updateTagSchema), controllerFactory.tagController.update.bind(controllerFactory.tagController));

router.delete('/tags/:id', validateParams(deleteTagSchema), controllerFactory.tagController.delete.bind(controllerFactory.tagController));

export default router;
