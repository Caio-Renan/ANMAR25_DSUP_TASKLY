import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody.js';
import { validateParams } from '../middlewares/validations/validateParams.js';
import validateQuery from '../middlewares/validations/validateQuery.js';
import {
  createNoteSchema,
  createNoteTaskIdSchema,
  updateNoteSchema,
  findNoteByIdSchema,
  findNotesByTaskIdSchema,
  deleteNoteSchema,
} from '../schemas/noteSchemas.js';
import { controllerFactory } from '../controllers/controllerFactory.js';
import { paginationNoteQuerySchema } from '../schemas/paginationSchemas.js';

const router = Router();

router.get(
  '/tasks/:taskId/notes',
  validateParams(findNotesByTaskIdSchema),
  validateQuery(paginationNoteQuerySchema),
  controllerFactory.noteController.findAllByTaskId.bind(
    controllerFactory.noteController
  )
);

router.post(
  '/tasks/:taskId/notes',
  validateParams(createNoteTaskIdSchema),
  validateBody(createNoteSchema),
  controllerFactory.noteController.create.bind(controllerFactory.noteController)
);

router.get(
  '/notes/:id',
  validateParams(findNoteByIdSchema),
  controllerFactory.noteController.findById.bind(
    controllerFactory.noteController
  )
);

router.put(
  '/notes/:id',
  validateParams(updateNoteSchema),
  controllerFactory.noteController.update.bind(controllerFactory.noteController)
);

router.delete(
  '/notes/:id',
  validateParams(deleteNoteSchema),
  controllerFactory.noteController.delete.bind(controllerFactory.noteController)
);

export default router;
