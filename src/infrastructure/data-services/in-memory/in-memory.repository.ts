import { GenericRepository } from "src/core/abstracts";
import { Nullable } from "src/core/valueObjects";
import { InMemoryStore, inMemoryStore } from "./in-memory.store";
import { Entity } from "src/core/entities";

export class InMemoryRepository<T extends Entity> extends GenericRepository<T> {

    constructor(private collection: keyof InMemoryStore) {
        super()
    }

    private getStore = () => Object.values<T>(inMemoryStore[this.collection])

    async getAll(): Promise<T[]> {
        return this.getStore()
    }

    async get(id: string): Promise<Nullable<T>> {
        const result = this.getStore().find((record) => record.id === id)
        return result || null
    }

    async create(item: T): Promise<void> {
        inMemoryStore[this.collection] = {
            ...inMemoryStore[this.collection],
            [`${item.id}`]: item
        }
    }

    async update(id: string, partial: T): Promise<void> {
        const skill = await this.get(id)
        inMemoryStore[this.collection][id] = {
            ...skill,
            ...partial
        }
    }
}