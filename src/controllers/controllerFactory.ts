import { CategoryController } from './CategoryController';
import { NoteController } from './NoteController';
import { TagController } from './TagController';
import { TaskController } from './TaskController';
import { TaskTagController } from './TaskTagController';

export const controllerFactory = {
  categoryController: new CategoryController(),
  noteController: new NoteController(),
  tagController: new TagController(),
  taskController: new TaskController(),
  taskTagController: new TaskTagController(),
};
