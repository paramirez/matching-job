import { Nullable } from "../valueObjects";

export abstract class GenericRepository<T> {
    abstract getAll(): Promise<T[]>;
    abstract get(id: string): Promise<Nullable<T>>;
    abstract create(item: T): Promise<void>;
    abstract update(id: string, partial: Partial<Omit<T, 'id'>>): Promise<void>;
}