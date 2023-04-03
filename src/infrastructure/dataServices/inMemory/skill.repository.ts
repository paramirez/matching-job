import { GenericRepository } from "src/core/abstracts";
import { Skill } from "src/core/entities";
import { Nullable } from "src/core/valueObjects";
import { store } from "./store";

export class SkillRepository extends GenericRepository<Skill> {
    private getSkillStore = () => Object.values<Skill>(store.skills)

    async getAll(): Promise<Skill[]> {
        return this.getSkillStore()
    }

    async get(id: string): Promise<Nullable<Skill>> {
        const result = this.getSkillStore().find((skill) => skill.id === id)
        return result || null
    }

    async create(item: Skill): Promise<void> {
        store.skills = {
            ...store.skills,
            [`${item.id}`]: item
        }
    }

    async update(id: string, partial: Skill): Promise<void> {
        const skill = await this.get(id)
        store[id] = {
            ...skill,
            ...partial
        }
    }
}