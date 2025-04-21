import { TaskRepository } from './TaskRepository.js';
import { NoteRepository } from './NoteRepository.js';
import { CategoryRepository } from './CategoryRepository.js';
import { TagRepository } from './TagRepository.js';
import { TaskTagRepository } from './TaskTagRepository.js';

export const RepositoryFactory = {
  taskRepository: new TaskRepository(),
  noteRepository: new NoteRepository(),
  categoryRepository: new CategoryRepository(),
  tagRepository: new TagRepository(),
  taskTagRepository: new TaskTagRepository()
}