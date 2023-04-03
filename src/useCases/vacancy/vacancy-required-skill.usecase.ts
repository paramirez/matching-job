import { Injectable } from "@nestjs/common"
import { DataService } from "../../core/abstracts"
import { ValidSkill } from "../../core/valueObjects"
import { NotFoundError } from "../../core/errors"

@Injectable()
export class VacancyRequiredSkillUseCase {
    constructor(
        private dataServices: DataService
    ) { }

    async addRequiredSkill(id: string, skill: ValidSkill): Promise<void> {
        const found = await this.dataServices.vacancies.get(id)
        if (!found) throw new NotFoundError()

        const haveSkill = found.requiredSkills.find(requiredSkill => requiredSkill.skillId === skill.skillId)
        if (haveSkill) return

        const skillFound = await this.dataServices.skills.get(skill.skillId)
        if (!skillFound) throw new NotFoundError()

        await this.dataServices.vacancies.update(id, {
            requiredSkills: found.requiredSkills.concat(skill)
        })
    }

    async RemoveRequiredSkill(id: string, skill: string): Promise<void> {
        const found = await this.dataServices.vacancies.get(id)
        if (!found) throw new NotFoundError()

        const skills = found.requiredSkills.filter(requiredSkill => requiredSkill.skillId !== skill)
        if (skills.length < found.requiredSkills.length)
            await this.dataServices.vacancies.update(id, {
                requiredSkills: skills
            })
    }
}
