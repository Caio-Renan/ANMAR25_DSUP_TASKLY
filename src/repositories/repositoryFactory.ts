import { TaskRepository } from '@repositories/TaskRepository';
import { NoteRepository } from '@repositories/NoteRepository';
import { CategoryRepository } from '@repositories/CategoryRepository';
import { TagRepository } from '@repositories/TagRepository';
import { TaskTagRepository } from '@repositories/TaskTagRepository';

export const RepositoryFactory = {
  taskRepository: new TaskRepository(),
  noteRepository: new NoteRepository(),
  categoryRepository: new CategoryRepository(),
  tagRepository: new TagRepository(),
  taskTagRepository: new TaskTagRepository()
}