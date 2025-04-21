import { TaskService } from './TaskService';
import { NoteService } from './NoteService';
import { CategoryService } from './CategoryService';
import { TagService } from './TagService';
import { TaskTagService } from './TaskTagService';

export const ServiceFactory = {
  taskService: new TaskService(),
  noteService: new NoteService(),
  categoryService: new CategoryService(),
  tagService: new TagService(),
  taskTagService: new TaskTagService()
};