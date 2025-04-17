import { TaskRepository } from '@repositories/TaskRepository'
import { NoteRepository } from '@repositories/NoteRepository'

export const RepositoryFactory = {
  taskRepository: new TaskRepository(),
  noteRepository: new NoteRepository()
}