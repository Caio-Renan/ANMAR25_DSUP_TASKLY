export interface IBaseRepository<T, CreateDTO = Omit<T, 'id' | 'createdAt' | 'updatedAt'>, FilterDTO = any> {
  create(data: CreateDTO): Promise<T>
  findAll(filter?: FilterDTO): Promise<T[]>
  findById(id: number): Promise<T | null>
  update(id: number, data: Partial<T>): Promise<T>
  delete(id: number): Promise<T>
}