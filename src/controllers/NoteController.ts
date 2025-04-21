import { Request, Response, NextFunction } from 'express';
import { NoteService } from '../services/NoteService.js';
import { ServiceFactory } from '../services/serviceFactory.js';

export class NoteController {
  private noteService: NoteService;

  constructor() {
    this.noteService = ServiceFactory.noteService;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const noteData = req.body;
      const taskId = Number(req.params);
      const note = await this.noteService.create(taskId, noteData);
      res.status(201).json(note);
    } catch (error) {
      next(error);
    }
  }

  async findAllByTaskId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const taskId = Number(req.params);
      const notes = await this.noteService.findAllByTaskId(taskId);
      res.status(200).json(notes);
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const note = await this.noteService.findById(Number(id));
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const noteData = req.body;
      const updatedNote = await this.noteService.update(Number(id), noteData);
      res.status(200).json(updatedNote);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const deletedNote = await this.noteService.delete(Number(id));
      res.status(200).json(deletedNote);
    } catch (error) {
      next(error);
    }
  }
}