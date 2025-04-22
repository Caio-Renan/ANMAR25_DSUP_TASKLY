import { Note } from '@prisma/client';

export type SortDirection = 'asc' | 'desc';
export interface PaginationFilter {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: SortDirection;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  description?: string;
  status?: 'TODO' | 'IN_PROGRESS' | 'DONE';
  categoryId?: number;
  tagId?: number;
}

export interface IBaseRepository<
  T,
  CreateDTO = Omit<T, 'id' | 'createdAt' | 'updatedAt'>,
  FilterDTO extends PaginationFilter = PaginationFilter,
> {
  create(data: CreateDTO): Promise<T>;
  findAll(filter?: FilterDTO): Promise<{
    items: T[];
    total: number;
  }>;
  findById(id: number): Promise<T | null>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<T>;
}

export interface INoteRepository<
  T,
  CreateDTO = Omit<T, 'id' | 'createdAt' | 'updatedAt'>,
> {
  create(data: CreateDTO): Promise<T>;
  findAll(
    filter: { taskId: number },
    pagination: PaginationFilter
  ): Promise<{ items: Note[]; total: number }>;
  findById(id: number): Promise<T | null>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<T>;
}
