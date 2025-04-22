import { TaskRepository } from './TaskRepository.js';
import { NoteRepository } from './NoteRepository.js';
import { CategoryRepository } from './CategoryRepository.js';

export const RepositoryFactory = {
  taskRepository: new TaskRepository(),
  noteRepository: new NoteRepository(),
  categoryRepository: new CategoryRepository(),
};
