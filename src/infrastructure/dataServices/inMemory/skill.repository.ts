import { GenericRepository, SkillGenericRepository } from "src/core/abstracts";
import { Skill } from "src/core/entities";
import { Nullable, ValidSkill } from "src/core/valueObjects";
import { store } from "./store";

export class SkillRepository extends SkillGenericRepository {
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
        store.skills[id] = {
            ...skill,
            ...partial
        }
    }

    async hasAllSkills(validSkills: ValidSkill[]) {
        const skills = await validSkills.reduce(async (previousValue, currentValue) => {
            const result = await previousValue;
            const skill = await this.get(currentValue.skillId);
            if (skill) return Promise.resolve(result.concat(currentValue.skillId))
            return Promise.resolve([])
        }, Promise.resolve([]))
        return skills.length === validSkills.length
    }

}