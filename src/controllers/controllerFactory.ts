import { CategoryController } from './CategoryController.js';
import { NoteController } from './NoteController.js';
import { TaskController } from './TaskController.js';

export const controllerFactory = {
  categoryController: new CategoryController(),
  noteController: new NoteController(),
  taskController: new TaskController(),
};
