import { CategoryController } from './CategoryController.js';
import { NoteController } from './NoteController.js';
import { TagController } from './TagController.js';
import { TaskController } from './TaskController.js';
import { TaskTagController } from './TaskTagController.js';

export const controllerFactory = {
  categoryController: new CategoryController(),
  noteController: new NoteController(),
  tagController: new TagController(),
  taskController: new TaskController(),
  taskTagController: new TaskTagController(),
};
