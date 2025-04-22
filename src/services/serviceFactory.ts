import { TaskService } from './TaskService.js';
import { NoteService } from './NoteService.js';
import { CategoryService } from './CategoryService.js';
//import { TagService } from './TagService.js';
//import { TaskTagService } from './TaskTagService.js';

export const ServiceFactory = {
  taskService: new TaskService(),
  noteService: new NoteService(),
  categoryService: new CategoryService(),
  //tagService: new TagService(),
  //taskTagService: new TaskTagService()
};
