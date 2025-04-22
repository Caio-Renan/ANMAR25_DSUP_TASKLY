import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody.js';
import { validateParams } from '../middlewares/validations/validateParams.js';
import validateQuery from '../middlewares/validations/validateQuery.js';
import {
  createCategorySchema,
  updateCategorySchema,
  findCategoryByIdSchema,
  deleteCategorySchema,
  updateCategoryIdSchema,
} from '../schemas/categorySchemas.js';
import { controllerFactory } from '../controllers/controllerFactory.js';
import { paginationCategoryQuerySchema } from '../schemas/paginationSchemas.js';

const router = Router();

router.get(
  '/categories',
  validateQuery(paginationCategoryQuerySchema),
  controllerFactory.categoryController.findAll
);

router.post(
  '/categories',
  validateBody(createCategorySchema),
  controllerFactory.categoryController.create.bind(
    controllerFactory.categoryController
  )
);

router.get(
  '/categories/:id',
  validateParams(findCategoryByIdSchema),
  controllerFactory.categoryController.findById.bind(
    controllerFactory.categoryController
  )
);

router.put(
  '/categories/:id',
  validateParams(updateCategoryIdSchema),
  validateBody(updateCategorySchema),
  controllerFactory.categoryController.update.bind(
    controllerFactory.categoryController
  )
);

router.delete(
  '/categories/:id',
  validateParams(deleteCategorySchema),
  controllerFactory.categoryController.delete.bind(
    controllerFactory.categoryController
  )
);

export default router;
