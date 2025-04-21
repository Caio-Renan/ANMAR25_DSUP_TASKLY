import { Router } from 'express';
import { validateBody } from '../middlewares/validations/validateBody';
import { validateParams } from '../middlewares/validations/validateParams';
import { createNoteSchema, createNoteTaskIdSchema, updateNoteSchema, findNoteByIdSchema, findNotesByTaskIdSchema, deleteNoteSchema } from '../schemas/noteSchemas';
import { controllerFactory } from '../controllers/controllerFactory';

const router = Router();

router.get('/tasks/:taskId/notes', validateParams(findNotesByTaskIdSchema), controllerFactory.noteController.findAllByTaskId.bind(controllerFactory.noteController));

router.post('/tasks/:taskId/notes', validateParams(createNoteTaskIdSchema), validateBody(createNoteSchema), controllerFactory.noteController.create.bind(controllerFactory.noteController));

router.get('/notes/:id', validateParams(findNoteByIdSchema), controllerFactory.noteController.findById.bind(controllerFactory.noteController));

router.put('/notes/:id', validateParams(updateNoteSchema), controllerFactory.noteController.update.bind(controllerFactory.noteController));

router.delete('/notes/:id', validateParams(deleteNoteSchema), controllerFactory.noteController.delete.bind(controllerFactory.noteController));

export default router;